const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    picture: "https://image.tmdb.org/t/p/original/8fEsV5V6t987vgP2G0LNxG4ohBs.jpg",
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    picture: "https://th.bing.com/th/id/R.081724bb947bdeb1e005df999c6f87c0?rik=99d2oFvzM%2bZc9A&pid=ImgRaw&r=0",
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    picture: "https://fr.web.img3.acsta.net/videothumbnails/16/04/12/11/15/409054.jpg",
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    picture: "https://3.bp.blogspot.com/-6E_6yRlrRkg/WzA85f5UOnI/AAAAAAAAiTA/t_6PGZmz4H8p-hNnGCFNRFjNZjps021qgCLcBGAs/s1600/2454348.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg",
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    picture: "https://th.bing.com/th/id/OIP.NrEEo420l1mnW-vIAuekyQHaIp?pid=ImgDet&rs=1",
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    picture: "https://th.bing.com/th/id/R.527424edce1b68aef9f0825d787c2bc1?rik=oQ8GQmxc%2btmyvQ&pid=ImgRaw&r=0",
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    picture: "https://th.bing.com/th/id/R.527424edce1b68aef9f0825d787c2bc1?rik=oQ8GQmxc%2btmyvQ&pid=ImgRaw&r=0",
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    picture: "https://th.bing.com/th/id/OIP.CNwkuQ4Jqo_6XNGYJ0f68QHaKL?pid=ImgDet&rs=1",
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    picture: "https://th.bing.com/th/id/OIP.Drw29X6mti6RACzDetzn8gHaK-?pid=ImgDet&rs=1",
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    picture: "https://th.bing.com/th/id/R.15b1630b1ba1d9e072e2496a97d85b5d?rik=K79kvnqSVeMaCw&riu=http%3a%2f%2fwww.literarytraveler.com%2fwp-content%2fuploads%2f2015%2f01%2fGone-Girl1.jpg&ehk=19enK5K7Zy8YKYWWbwNkdXIYUTWj1JH2aRh%2f5hCiWBU%3d&risl=&pid=ImgRaw&r=0",
    likes: 22,
    dislikes: 12
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))