function make_album(artist, album, tracks) {
    var album_obj = {
        artist: artist,
        album: album,
    };
    if (tracks !== undefined) {
        album_obj.tracks = tracks;
    }
    return album_obj;
}
var alb_one = make_album('Atif Aslam', 'one');
var alb_two = make_album('Atif Aslam', 'two', 7);
console.log(alb_one);
console.log(alb_two);
