'use strict'

// const searchURL = 'https://api.github.com/users/jonmkang/repos'

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const searchUser = $('#js-search-user').val();
      getRepo(searchUser);
    });
}

function getRepo(query){
    const url = `https://api.github.com/users/${query}/repos`
    fetch(url)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        // .catch(err => console.log('Something went wrong'))
}

function displayResults(responseJson){
    console.log(responseJson);
    let i = 0;
    $('#results-list').empty();
    for(i = 0; i < responseJson.length; i++){
        $('#results-list').append(
            `<li><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></li>`
        )
    }
    $('#results').removeClass('hidden');
};
  
$(watchForm);