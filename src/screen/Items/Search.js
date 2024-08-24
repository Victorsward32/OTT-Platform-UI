import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation
import MovieCard from '../Components/MovieCard';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredMovies(movies);
    } else {
      filterMovies(searchQuery);
    }
  }, [searchQuery, movies]);

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

  const filterMovies = (query) => {
    const filtered = movies.filter(movie =>
      movie.original_title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleMoviePress = (movie) => {
    navigation.navigate('MoviePage', { movie }); // Pass the selected movie as a parameter
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.TextInput}
            placeholder='Search Movie name...'
            placeholderTextColor="#ccc"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.SearchBtn}>
            <AntDesign name='search1' size={24} color='#fff' />
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredMovies}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cardWrapper} // Ensure full coverage
              onPress={() => handleMoviePress(item)}
            >
              <MovieCard movie={item} />
            </TouchableOpacity>
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="large" color="#fff" /> : null}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  containerSearch: {
    height: 60,
    margin: 15,
    borderRadius: 30,
    backgroundColor: '#444',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  TextInput: {
    flex: 1,
    height: 40,
    color: '#fff',
    fontSize: 16,
  },
  SearchBtn: {
    padding: 10,
    backgroundColor: '#149ACF',
    borderRadius: 20,
    marginLeft: 10,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  listContent: {
    paddingBottom: 100,
  },
  cardWrapper: {
    width: '50%', // Ensure it adapts to the movie card width
    paddingHorizontal: 5,
  },
});

export default Search;
