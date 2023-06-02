let database = {
  users: [
    {
      id: '1',
      name: 'Gokan Wisely',
      pass: 'qweqwe',
      isAdmin: false,
    },
    {
      id: '2',
      name: 'Yuan Jinping',
      pass: 'abcdef',
      isAdmin: false,
    },
    {
      id: '3',
      name: 'Jaya Jaya',
      pass: '123123',
      isAdmin: false,
    },
    {
      id: '4',
      name: 'Yoa Sobi',
      pass: '321321',
      isAdmin: true,
    },
    {
      id: '5',
      name: 'Sommy Taputra',
      pass: '333333',
      isAdmin: true,
    },
    {
      id: '6',
      name: 'Rhein',
      pass: '999999',
      isAdmin: false,
    }
  ],

  news: [
    {
      id: '1',
      title: 'Polisi Ungkap Siasat 2 Sopir Angkot di Medan Curi Barang Penumpang',
      author: 'Gokan Wisely',
      date: '01/02/1945',
      image: 'https://st3.depositphotos.com/2704315/17501/v/600/depositphotos_175014254-stock-illustration-jealous-office-worker-businessman-kill.jpg',
      content: 'Medan - Polsek Sunggal mengungkap kronologis pencurian handphone yang dialami siswi saat berada di dalam angkot, Jalan Jamin Ginting, Kota Medan. Kini, dari dua pelaku, seorang telah ditangkap dan lainnya diburu. Kapolsek Sunggal Kompol Chandra Yudha mengatakan kejadian itu berlangsung pada Jumat (3/3/2023) sekitar pukul 14.30 WIB. Korban berinisal A yang masih duduk di bangku sekolah. "Siswi ini mau berangkat ke tempat lesnya dari arah Universitas Sumatera Utara (USU) menuju Simpang Pos," kata Chandra kepada detikSumut, Selasa (7/3/2023). "Perlu diketahui kedua pelaku ini sama-sama sopir angkot," tambahnya. Rupanya sebelum korban naik, kedua pelaku yang berinisial C dan P telah mendesain rencana pencurian. Tersangka C mengaku P yang mengajaknya untuk melakukan pencurian terhadap barang penumpang. Karena mengalami kesulitan ekonomi, C pun menerima tawaran P. C berpura-pura sebagai penumpang. Sementara P sebagai sopir angkot. "Jadi kedua pelaku merencanakan atau mendesain aksi pencurian tersebut. Ya drama mereka lah berbagi peran," ucapnya. Di tengah perjalanan, A pun menjadi penumpang angkot pelaku. Saat A masuk, hanya ada kedua pelaku di dalam. A pun memilih duduk di bangku belakang angkot. Tiba-tiba A disuruh pindah ke bangku penumpang di bagian depan angkot. Ketika ingin berhenti, A merasa kesulitan membuka pintu angkot. "Di waktu bersamaan, P beraksi mengambil HP dari tas korban. Posisinya itu korban membelakangi pelaku karena sibuk mau membuka pintu,"'
    },
    {
      id: '2',
      title: 'Bandung dalam Angka Cengkeraman Kejahatan',
      author: 'Yuan Jinping',
      date: '03/12/2025',
      image: 'https://akcdn.detik.net.id/community/media/visual/2016/01/04/4b537431-b1e8-493d-9650-e12834217658_169.jpg?w=700&q=90',
      content: 'Bandung - Tingkat keamanan di Kota Bandung menjadi sorotan. Video sejumlah kasus tindakan kriminal, seperti pembacokan kerap viral di media sosial (medsos). Terbaru, terjadi pembacokan di depot air minum Riung Bandung. Bagaimanakah tingkat kriminalitas di Kota Bandung? Menurut data Badan Pusat Statistik (BPS) Kota Bandung yang dirilis 2023, jumlah kejahatan atau tindakan kriminal di Kota Bandung pada 2022 ada sebanyak 2.626 kasus. Total kasus ini mencakup semua kejahatan yang dilaporkan atau ditangani polisi, seperti pencurian, pembegalan, perampokan, penipuan dan lainnya. Masih dari data BPS, dari 2.626 kasus itu, kasus paling banyak selama 2022 adalah penipuan, yakni 634 kasus. Kemudian disusul 201 kasus penganiayaan, 263 kasus penggelapan, dan 223 kasus pencurian dengan pemaksaan atau perampokan. Menurut waktu kejadian, waktu paling rawan adalah saat pukul 12.00 WIB hingga 18.00 WIB. Sepanjang 2022, kejadian kejahatan di waktu tersebut mencapai 849 kasus. Kemudian pukul 06.00 WIB hingga 12.00 WIB mencapai 671 kasus. Sedangkan saat malam hari atau pukul 18.00 WIB hingga 24.00 WIB ada 67 kasus kejahatan. Selanjutnya pukul 24.00 WIB hingga 06.00 WIB, kejadian kejahatannya ada 441 kasus. Masih menurut data BPS, lokasi kejadian paling rawan yang dilaporkan adalah di permukiman. Kejadian kejahatannya mencapai 1.071 kasus. Kemudian, paling rawan lainnya adalah di jalan umum, sebanyak 555 kasus. Selebihnya ada yang terjadi di kantor, pasar, kampus atau sekolah, dan lainnya.Jumlah kasus kejahatan pada 2022 lebih banyak dibandingkan dengan 2021. Pada 2021, jumlah kasus kriminalitas di Bandung mencapai 2.481.'
    },
    {
      id: '3',
      title: 'Hakim Sumpahi 2 Saksi Kasus Unila: Berbohong Dibakar Api Neraka',
      author: 'Jaya Jaya',
      date: '04/09/1998',
      image: 'https://st4.depositphotos.com/10796538/24280/i/450/depositphotos_242808514-stock-photo-law-concept-gavel-judge-statue.jpg',
      content: 'Bandar Lampung - Ketua Majelis Hakim, Lingga Setiawan marah dan kecewa terhadap dua saksi yang diperiksa dalam kasus suap PMB Jalur Mandiri Unila. Lingga mendoakan saksi yang berbohong di persidangan akan dibakar api neraka. Awalnya Jaksa KPK melakukan konfrontir antara keterangan saksi Budi Sutomo, Kabiro Perencanaan dan Humas Unila dengan keterangan Anggota DPRD Provinsi Lampung, Mardiana. Konfrontir keterangan ini setelah pada sidang sebelumnya, Mardiana sempat berdalih tidak menyerahkan uang suap sebesar Rp 100 Juta. Namun berbeda pada keterangan Budi Sutomo, pada keterangannya beberapa waktu sidang lalu dia menyebutkan bahwa Mardiana menyerahkan uang sebesar Rp 100 Juta. Penyerahan itu terjadi di Gedung LNC pada 27 Juli 2022. "Jadi saksi-saksi ini tetap pada keterangan sebelumnya. Baik jika dalam keterangan dua orang yang sama jam yang sama peristiwa yang sama tapi berbeda maka dipastikan ada yang berbohong. Baik Pak Budi atau Ibu Mardiana," kata Lingga di PN Tanjung Karang, Bandar Lampung, Selasa (7/3/2023). Dalam persidangan, keduanya pun tetap berpegang teguh terhadap keterangan masing-masing meski berkali-kali diingatkan bahwa keduanya telah bersumpah di bawah Al-Quran. Sehingga hal itu memancing kemarahan Lingga Setiawan. "Nanti kalian yang berbohong itu, mudah-mudahan dibakar habis-habisan di api neraka, saya juga bermunajat kepada Allah SWT semoga saudara dibakar api neraka, anak keturunan saudara juga dibakar habis-habisan di api neraka, jadi yang bohong ini saya sumpahi juga," ucap hakim. Mendengar sumpah Lingga, pengunjung sidang pun turun mengaminkan doa tersebut. "Amiiiiiiiiinnn," sorak para pengunjung sidang.'
    },
    {
      id: '4',
      title: 'Gara-gara Kentut Seorang Pria Nekat Habisi Nyawa Tetangganya',
      author: 'Sommy Taputra',
      date: '09/07/2022',
      image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2023/03/06/6405e1ac8a28e-pelaku-nekat-habisi-nyawa-rekannya-gegara-kentut_1265_711.jpg',
      content: 'Seorang pria nekat menghabisi nyawa rekannya di Kabupaten Pasangkayu, Sulawesi Barat, hanya dipicu kerap kali kentut di dekatnya. Pelaku berhasil ditangkap polisi di tempat persembunyan usai menghabisi nyawa rekannya sendiri.  Kapolsek Sarudu, Iptu Usman, dalam keterangan tertulisnya, Senin (6/3) mengatakan, pelaku BD (63) warga Desa Dapureng, Kecamatan Sarudu, yang tidak terima korban sering kentut di dekat pelaku. Korban inisial Z (52) merupakan tetangga pelaku sendiri. Korban dianiaya oleh pelaku hingga nyawa korban melayang secara sadis. "Usai menghabisi nyawa korban akhirnya pelaku kabur. Anggota unit Reskrim Polsek Sarudu mengejar pelaku," kata Iptu Usman dalam keterangannya. Iptu Usman, mengaku, berhasil menangkap pelaku di persembunyiannya di Desa Bulu Mario, Kecamatan Sarudu. “Pelaku sudah kami amankan di persembunyiannya di di Desa Bulu, selanjutnya akan diproses lebih lanjut,” kata Kapolsek Sarudu Iptu Usman. Menurut kapolsek, kronologis kejadiannya diawali dengan korban dan pelaku sempat duduk bersama di rumah korban. Setelah itu keduanya berkunjung ke rumah salah satu warga, Imran (55), yang tidak jauh dari rumah korban.'
    },
  ],

  comment: [
    {
      id: 1,
      comments: [
        {
          username: 'Cohn Jena',
          input: 'Beritanya absurd bgt'
        },
        {
          username: 'Gomen Nasai',
          input: 'Mohon maaf beritanya tidak berkualitas'
        },
        {
          username: 'Kid Named Finger',
          input: 'hahahahaha'
        }
      ]
    },
    {
      id: 2,
      comments: [
        {
          username: 'The Rock',
          input: 'boom'
        },
        {
          username: 'Sarah',
          input: 'okelah kriminilis'
        }
      ]
    },
    {
      id: 3,
      comments: [
        {
          username: 'jon31',
          input: 'lmaooooo'
        },
        {
          username: 'Macaroni',
          input: 'ini apaan'
        }
      ]
    },
    {
      id: 4,
      comments: [
        {
          username: 'Jane2022',
          input: 'kocak bener headline nya'
        },
        {
          username: 'Neko',
          input: 'wtfff'
        },
        {
          username: 'Chris',
          input: 'bruh'
        }
      ]
    }
  ]
}

// ==================== LOGIN POPUP ====================

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const articleContent = document.querySelector('.jepang')

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  articleContent.classList.add('hidden')
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  articleContent.classList.remove('hidden')
});

// ==================== LOGIN ====================

const username = document.getElementById('username')
const password = document.getElementById('password')
const login = document.getElementById('login-button')
const users = database.users
const navbar = document.querySelector('.navigation')

let currentUser = ''
// let test = ''

login.addEventListener('click', (e) => {
  e.preventDefault()
  if (username.value === '') return alert('Please input username')
  if (password.value === '') return alert('Please input password')

  let uname = false
  let pass = false
  for (let user of database.users) {
    if (username.value === user.name) {
      uname = true
    }
    if (password.value === user.pass) {
      pass = true
    }
  }
  if (!uname || !pass) {
    return alert('INCORRECT USERNAME OR PASSWORD')
  }

  currentUser = username.value

  loggedIn(username.value)
  articleContent.classList.remove('hidden')
})

function loggedIn(username) {
  btnPopup.classList.add('hidden')
  wrapper.classList.add('hidden')
  navbar.classList.remove('hidden')

  let span = document.createElement('span')
  span.innerText = username
  span.classList.add('user-profile')
  span.setAttribute('id', 'user-name')
  navbar.append(span)

  test = document.getElementById('user-name')
}

// ADD SAVE USERNAME TO VARIABLE
// console.log(test.innerText);

// ==================== READ MORE ====================

// function readMoreBtn() {
//   let dots = document.getElementById("dots");
//   let moreText = document.getElementById("more");
//   let btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }

// ============== CONTENT LOOP ==============

// let content = document.getElementById('content')

// for (let news of database.news) {
//     let article = ``
//     article = `
//     <article id="berita${news.id}" class="card">
//         <h2 class="newParagraph">${news.title}</h2>
//         <span>${news.author} - ${news.date}</span> <br>
//         <img src="${news.image}" class="featured-image" alt="berita1"> <br>
//         <p style="line-height: 2em;">
//         ${news.content.substring(0, 400)}
//         <span id="dots">...</span>
//         <span id="more" class="hidden">${news.content.substring(400)}</span>
//         </p>
//         <button class="submitButton" onclick="readMoreBtn()" id="myBtn">Read more</button>
//     </article>`
//     content.innerHTML += article
// }

let content = document.getElementById('content')

for (let news of database.news) {
  let article = ``
  article = `
    <article id="berita${news.id}" class="card">
        <h2 class="newParagraph">${news.title}</h2>
        <span>${news.author} - ${news.date}</span> <br>
        <img src="${news.image}" class="featured-image" alt="berita1"> <br>
        <p style="line-height: 2em;">
        ${news.content.substring(0, 400)}
        <span id="dots">...</span>
        <span class="hidden more">${news.content.substring(400)}</span>
        </p>
        <button class="read-more-btn" onClick="showPost(${news.id})">Read more</button>
    </article>`
  content.innerHTML += article
}

// ============== COMMENT LOOP ==============

for (let cmnt of database.comment) {
  let article = ``
  article =
    content.innerHTML += article
}

// ==================== READ MORE ====================

// getElementsByClassName returns an Array-like object so we need to iterate 
let readMore = document.getElementsByClassName('read-more-btn')
let more = document.getElementsByClassName('more')
let commentSection = document.getElementById('comments-section')


// for (let i = 0; i < readMore.length; i++) {
//   readMore[i].addEventListener('click', () => {
//     more[i].classList.toggle('hidden')
//     // commentSection.classList.toggle('hidden')
//   })
// }


let hiddenPost = document.getElementById('hidden-post')
let homeButton = document.getElementById('home-button')
let commentListContainer = document.getElementById('komentar');
let commentInput = document.getElementById('comment-input')

function showComments(id) {
  if (currentUser !== '') {
    commentInput.classList.remove('extra-hidden')
  }

  commentSection.classList.remove('hidden');
  commentListContainer.innerHTML = ""; // reset current comment list

  let commentsObj = database.comment.find(comment => comment.id === id);
  // console.log(commentsObj)
  if (!commentsObj) return;
  let index = 0
  for (let comment of commentsObj.comments) {
    const commentContent = document.createElement("div");
    commentContent.classList.add("komentar-content");
    commentContent.innerHTML = `
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="" style="max-width: 60px; margin-top: 30px;">
      <h3>${comment.username}</h3>
      <p style="margin-bottom: 7px;">${comment.input}</p>
    `;

    if (currentUser === comment.username) {
      commentContent.innerHTML += `<button onClick="deleteComment(${id}, ${index})">Delete</Button>`
    }
    
    commentListContainer.appendChild(commentContent);
    index++
  }
}

// ============= NEW COMMENT =============

let postCommentButton = document.getElementById('submit-comment1')

function newComment(postId) {
  let content = document.getElementById('comment-form').value
  let newComment = { username: currentUser, input: content }
  let currentPostComments = database.comment.find(cmnt => cmnt.id === postId)
  console.log(currentPostComments);
  currentPostComments.comments.push(newComment);
  showComments(postId);
}

// ============= SHOW POST =============

function showPost(id) {
  content.classList.add('hidden')
  hiddenPost.classList.remove('hidden')
  let viewedPostTitle = document.getElementById('post-view-title')
  let viewedPostAuthor = document.getElementById('post-view-author')
  let viewedPostImg = document.getElementById('post-view-img')
  let viewedPostParagraph = document.getElementById('post-view-paragraph')
  let news = database.news.find(newsObj => newsObj.id == id)
  viewedPostTitle.innerText = news.title
  viewedPostAuthor.innerText = `${news.author} - ${news.date}`
  viewedPostImg.setAttribute('src', news.image)
  viewedPostParagraph.innerText = news.content
  
  postCommentButton.onclick = () => newComment(id)
  showComments(id)

}

function showPostList() {
  content.classList.remove('hidden')
  hiddenPost.classList.add('hidden')
  commentSection.classList.add('hidden')
}

homeButton.addEventListener('click', showPostList)

function deleteComment(postId, commentIndex) {
  let commentsObj = database.comment.find(comment => comment.id === postId);
  let commentsArr = commentsObj.comments;
  commentsArr.splice(commentIndex, 1);
  showComments(postId) //reload comments list
}



// ============= NEW COMMENT =============




// const comment = document.getElementById("comment-form");
// const komentarBaru = document.getElementById("komentar-baru");
// const submitComment1 = document.getElementById("submit-comment1");
// let commentArray = [];

// submitComment1.addEventListener("click", (e) => {
//   e.preventDefault();
//   const name = currentUser
//   let data = { name: name, comment: comment.value };
//   commentArray.push(data);
//   console.log(commentArray);
//   localStorage.setItem("comment", JSON.stringify(commentArray));
//   getComment();
// });

// const getComment = () => {
//   let commentStorage = JSON.parse(localStorage.getItem("comment"));
//   commentArray = commentStorage;
//   let komen = "";
//   commentStorage.map((item, index) => {
//     komen += `
//     <div class="komentar-content" >
//             <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
//           alt="" style="max-width: 60px; margin-top: 30px;">
//             <h3>${item.name}</h3>
//             <p style="margin-bottom: 7px;">${item.comment}</p>
//             <button type="button" class="btn-delete hapus">Hapus</button>
//             <button type="button" class="btn-edit edit">Edit</button>
//         </div> `;
//   });
//   komentarBaru.innerHTML = komen;
//   document.querySelectorAll(".hapus").forEach((item, index) => {
//     item.addEventListener("click", (e) => {
//       deleteComment(index);
//     });
//   });
//   document.querySelectorAll(".edit").forEach((item, index) => {
//     item.addEventListener("click", (e) => {
//       // const newName = prompt("Enter your name:");
//       const newComment = prompt("Enter your comment:");
//       const newData = { name: currentUser, comment: newComment };
//       editComment(index, newData);
//     });
//   });
  
  
// };

// const deleteComment = (item) => {
//   commentArray.splice(item, 1);
//   localStorage.setItem("comment", JSON.stringify(commentArray));
//   getComment();
// };

// const editComment = (index, newData) => {
//   commentArray[index] = newData;
//   localStorage.setItem("comment", JSON.stringify(commentArray));
//   getComment();
// };

