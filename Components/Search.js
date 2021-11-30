import React, { Component } from "react";
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmsItems'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchedText= ""
        this.state = {films: [] }
    }



   _loadFilms() {
       if (this.searchedText.length > 0  ){
        getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
            this.setState({ films: data.results})
        });
    }
   }
   
   _searchTextInputChanged(text){
       this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
   }

    render(){
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textInput} placeholder="Titre du film"
                onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button title="Rechercher" onPress= {() => this._loadFilms() }/>
                <FlatList
                  data = {this.state.films}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => <FilmItem film={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1

    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})
export default Search