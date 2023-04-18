
    const generateTopicBtn = document.getElementById('generate-topic-btn');
    const topicContainer = document.getElementById('topic-container');

    generateTopicBtn.addEventListener('click', () => {
        fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary')
            .then(response => response.json())
            .then(data => {
                topicContainer.innerHTML = `
        <div class=gen>
         <img class='image' src=${data.originalimage.source} alt="photo">
         <div class='data'>   
         <h2 class='gen_title'>${data.title}</h2>    
          <p class='gen_info'>${data.extract}<br>
          <a href="${data.content_urls.desktop.page}" target="_blank">Read more on Wikipedia</a>
          </p>
          </div>
          
        </div>
        `;
            })
            .catch(error => {
                console.error('Error:', error);
                topicContainer.innerHTML = '<p>Failed to generate a random topic. Please try again later.</p>';
            });
    });