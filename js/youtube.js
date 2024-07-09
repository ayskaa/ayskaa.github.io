const youtubePlaylist = document.getElementById('youtubePlaylist')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=UUbdiovrPX0spsJLbEisvAgQ&key=AIzaSyBShhC5ynOWRcpCWIATswOQtVBuWWcfLzQ')
.then(res => res.json())
.then(data =>{
    console.log(data);
    youtubePlaylist.innerHTML = data.items[4].snippet.title
})
