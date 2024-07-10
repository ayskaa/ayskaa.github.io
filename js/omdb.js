$('#tombol').on('click', function(){
    $('#daftar-film').html('')
    $.ajax({
        url: 'https://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '4dd3e488',
            's': $('#cari').val()
        },
        success: function (hasil) {
            if (hasil.Response == 'True') {
                let film = hasil.Search
                console.log(film);
                $.each(film, function (i, data) {
                    $('#daftar-film').append(`
                    <div class="col-md-4 my-2">
                        <div class="card" style="width: 18rem;">
                            <img src=${data.Poster} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.Title}</h5>
                                <p class="card-text">${data.Year}</p>
                                <a href="#" class="btn btn-detail" data-id="${data.imdbID}" data-bs-target="#exampleModal">Launch demo modal>Detail</a>
                            </div>
                        </div>
                    </div>
                        `)
                })
            }else{
                $('#daftar-film').html(`
                <div class="col">
                    <h5 class="text-center text-danger">${hasil.error}</h5>
                </div>  
                 `)
            }
        }
    })
});
// evevt bundling
$('#daftar-film').on('click', '.detail', function() {
    let id = $(this).data('id')
    console.log(id);
    
})




