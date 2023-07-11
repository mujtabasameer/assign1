function make_album(artist: string, album: string, tracks?: number): object 
{
    let album_obj:any=
    {
        artist:artist,
        album:album,
    };

    if(tracks!==undefined)
    {
        album_obj.tracks=tracks;
    }

    return album_obj;
}


let alb_one=make_album('Atif Aslam','one');
let alb_two=make_album('Atif Aslam','two',7);

console.log(alb_one);
console.log(alb_two);