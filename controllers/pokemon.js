module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.pokemon.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };

  let homeControllerCallback = (request, response) => {
      db.students.getAll((error, students) => {
        response.render('pokemon/index', { students });
      });
  };

  let songsControllerCallback = (request, response) => {
      db.songs.getAll((error, songs) => {
        response.render('pokemon/songs', { songs });
      });
  };


  let songControllerCallback = (request, response) => {

      var songId = request.params.id ;
      console.log(songId)

      db.songs.getAll((error, songs) => {

        var data = {
          song : songs[songId]
        }
        response.render('pokemon/song', data);
        // response.send(data);
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    home: homeControllerCallback,
    songs: songsControllerCallback,
    song: songControllerCallback
  };

}
