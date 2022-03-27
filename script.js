var msgTotal = $('p').length;
$('#msg-total').text(msgTotal);

$('body').on('click', '.trash-box', function() {
    $(this).parent().remove();
    msgTotal = $('p').length;
    $('#msg-total').text(msgTotal);
    console.log('supp du msg détecté');
})

$('body').on('click', '#btn-add', function () {
    var newMsg = $('#add-msg').val();
    $('body').append(`<div class="last-row">
    <img src="./avatars/avatar-3.jpg" alt="" class="avatar">
    <div>
        <h4>Adama Keval</h4>
        <p>`+ newMsg + `</p>
    </div>
    <img src="./avatars/trash.png" alt="" class="trash-box">
    </div>`);

    msgTotal = $('p').length;
    $('#msg-total').text(msgTotal);

    newMsg = $('#add-msg').val("");

    console.log('click add détecté');
    console.log($('#add-msg').val());
    }
)

$('#btn-search').click(
    function() {
        console.log('search click détecté')

        $('h4').each(function(){
            if($('#search-msg').val() != $(this).text()) {
                $(this).parent().parent().fadeOut()
                console.log("c'est pas pareil")
            } else {
                $(this).parent().parent().show()
                console.log("c'est pareil")
            }
        })
        $('#search-msg').val("");
    }
)

// for(var i=0; i<document.getElementsByClassName('trash-box').length; i++){
//     document.getElementsByClassName('trash-box')[i].addEventListener("click", function() {
//         this.parentNode.remove();
//         msgTotal = $('p').length;
//         $('#msg-total').text(msgTotal);
//         console.log('click supp détecté !')
//     }
//     )

// }

// var newMainDiv = document.createElement('div');
// var newAvatar = document.createElement('img');
// var nameMsgDiv = document.createElement('div');
// var h4 = document.createElement('h4');
// var newMsg = document.createElement('p');
// var newTrash = document.createElement('img');
// document.getElementById('btn-add').addEventListener('click',
// function() {
//     newMainDiv.className = 'last-row';
//     document.body.appendChild(newMainDiv);

//     newAvatar.className = 'avatar';
//     newAvatar.src = "./avatars/avatar-3.jpg";
//     newMainDiv.appendChild(newAvatar);

//     newMainDiv.appendChild(nameMsgDiv);

//     h4.textContent = 'Adama Keval';
//     nameMsgDiv.appendChild(h4);

//     newMsg.textContent = document.getElementById('add-msg').value;
//     nameMsgDiv.appendChild(newMsg);

//     newTrash.className = 'trash-box';
//     newTrash.src = "./avatars/trash.png";
//     newMainDiv.appendChild(newTrash);

//     document.getElementById('add-msg').value = "";

//     msgTotal = $('p').length;
//     $('#msg-total').text(msgTotal);

//     newTrash.addEventListener('click', function() {
//         this.parentNode.remove();
//         msgTotal = $('p').length;
//         $('#msg-total').text(msgTotal);
//     })

//     console.log('click add détecté !');
//     console.log(document.getElementById('add-msg').value);
// })
