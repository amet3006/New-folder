$(document).ready(function() {
     $('#post-form').submit(function(event) {
       event.preventDefault(); 
       
       
       let title = $('#title').text();
       let body = $('#body').text();
       
       
       let postData = {
         title: title,
         body: body,
         userId: 1 
       };
       
       //HomeWork 20 
       
       $.ajax({
         url: 'https://jsonplaceholder.typicode.com/posts/',
         method: 'POST',
         data: postData,
         success: function(response) {
           console.log(response);
           alert('Post created successfully!');
         },
         error: function(xhr, status, error) {
           console.log(xhr.responseText);
           alert('Error creating post!');
         }
       });
     });
   });

     
     $.ajax({
          url: 'https://jsonplaceholder.typicode.com/posts/',
          method: 'GET',
          success: function(posts) {
          
            const lastTenPosts = posts.slice(-10);
            
           
            for (let i = 0; i < lastTenPosts.length; i++) {
              const post = lastTenPosts[i];
              const row = $('<tr>');
              const idCell = $('<td>').text(post.id);
              
              row.append(idCell);
              $('#post-table tbody').append(row);
            }
          },
          error: function(xhr, status, error) {
            console.log(xhr.responseText);
            alert('Error getting posts!');
          }
        });

