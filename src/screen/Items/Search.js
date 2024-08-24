import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieCard from '../Components/MovieCard';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = (page) => {
    setLoading(true);
    fetch(`https://jsonfakery.com/movies/simple-paginate?page=${page}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setMovies(prevMovies => [...prevMovies, ...data.data]);
        } else {
          console.error('Unexpected data format:', data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={styles.containerSearch}>
          <TextInput style={styles.TextInput} placeholder='Search Movie name..' />
          <TouchableOpacity style={styles.SearchBtn}>
            <Image style={styles.searchIcon} source={require('../../assests/Icons/SearchIcons.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={movies}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <MovieCard movie={item} />}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="large" color="#989898" /> : null}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000', // Assuming a dark background
  },
  containerSearch: {
    height: 80,
    width: '100%',
    borderRadius: 15,
    marginTop: 15,
    flexDirection: 'row',
  },
  TextInput: {
    height: 50,
    width: 330,
    backgroundColor: '#FAFAFA88',
    borderRadius: 15,
    paddingStart: 15,
    marginStart: 10,
  },
  searchIcon: {
    height: 50,
    width: 50,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  listContent: {
    paddingBottom: 100, // Padding to avoid overlap with the bottom bar
  },
});

export default Search;
