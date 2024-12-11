document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    const suggestion = document.createElement('div');
    suggestion.textContent = 'Type "help" for a list of available commands.';
    output.appendChild(suggestion);

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = input.value.trim();
            input.value = '';


            const newLine = document.createElement('div');
            newLine.textContent = `$ ${command}`;
            output.appendChild(newLine);


            executeCommand(command);
        }
    });


    function executeCommand(command) {
        if (command.toLowerCase() === 'help') {
            const availableCommands = [
                'about - About Melih Ateş',
                'social - Access my social media and contact information',
                'games - Links to the games I made',
                'videos - Links to the videos I made',
                'articles - Links to the articles I wrote',
                'clear - Clears the terminal screen',
                'date - Displays the current date and time',
                'exit - Closes the terminal window',
            ];

            availableCommands.forEach(cmd => {
                const newLine = document.createElement('div');
                newLine.textContent = cmd;
                output.appendChild(newLine);
            });
            output.appendChild(document.createElement('br'));
        } else if (command.toLowerCase() === 'clear') {
            output.innerHTML = ''; // Clear command
            const newLine = document.createElement('div');

            output.appendChild(newLine);

            const helpMessage = document.createElement('div');
            helpMessage.textContent = 'Type "help" for a list of available commands.';
            output.appendChild(helpMessage);
        } else if (command.toLowerCase() === 'date') {
            const currentDate = new Date().toLocaleString();
            const newLine = document.createElement('div');
            newLine.textContent = currentDate;
            output.appendChild(newLine);
            output.appendChild(document.createElement('br'));

        } else if (command.toLowerCase() === 'about') {
            const aboutInfo = `
                *~~~[============>
                <br>Hello, I'm Melih Ateş. 
                <br>I developed an interest in the software world at a young age, as I imagined the kinds of website and game projects I could create.
                <br>I am currently a student at Ankara University studying Computer Programming, particularly focusing on learning backend with Node.js and striving to improve my skills in C++ as well.
                <br>Additionally, you can explore some videos and articles I made through the links I've provided.
                <br>*~~~[============>
                <br><br>
            `;
            const newLine = document.createElement('div');
            newLine.innerHTML = aboutInfo;
            output.appendChild(newLine);

        } else if (command.toLowerCase() === 'social') {
            const socialInfo = `
                * email: melihates2004@gmail.com
                <br>* <a href="https://github.com/MelihAtes" target="_blank" rel="noopener">github</a>
                <br>* <a href="https://www.linkedin.com/in/melih-ateş-684a48217/" target="_blank" rel="noopener">linkedin</a>
                <br>* <a href="https://www.youtube.com/channel/UC7SSFG0B7-nSefQeAFPZuBg" target="_blank" rel="noopener">youtube</a>
                <br>* <a href="https://twitter.com/MelyhTheHun" target="_blank" rel="noopener">twitter</a>
                <br>* <a href="https://www.instagram.com/melihates2004/" target="_blank" rel="noopener">instagram</a>
                <br>* <a href="https://medium.com/me/stories/public" target="_blank" rel="noopener">medium</a>
                <br>* <a href="https://backloggd.com/u/MelyhTheHun/" target="_blank" rel="noopener">backloggd</a>
                <br>* <a href="https://www.imdb.com/user/ur102851419/?ref_=nv_usr_prof_2" target="_blank" rel="noopener">imdb</a>
                <br>* <a href="https://www.goodreads.com/user/show/139132389-melih-ate" target="_blank" rel="noopener">goodreads</a>
                <br><br>
            `;
            const newLine = document.createElement('div');
            newLine.innerHTML = socialInfo;
            output.appendChild(newLine);

        } else if (command.toLowerCase() === 'games') {
            const gamesInfo = `
            
                [+..oo]
                <br><a href="https://trinket.io/python/86fa4d9815">* the Hunt: text based python adventure game</a>
                <br><br>
            `;
            const newLine = document.createElement('div');
            newLine.innerHTML = gamesInfo;
            output.appendChild(newLine);

        } else if (command.toLowerCase() === 'videos') {
            const videosInfo = `
                  
                * <a href="https://www.youtube.com/watch?v=_Og1qPJu4dU" target="_blank" rel="noopener">Best of George Carlin</a>
                <br>* <a href="https://www.youtube.com/watch?v=6m-MILjlzBQ&t=32s" target="_blank" rel="noopener">Do Not Go Gentle Into That Good Night with King Bran's Final Voyage</a>
                <br>* <a href="https://www.youtube.com/watch?v=gQ5dQZhC83I" target="_blank" rel="noopener">Motivation of Dr. Who</a>
                <br>* <a href="https://www.youtube.com/watch?v=_SzVKhBjbXY" target="_blank" rel="noopener">Action of NES</a>
                <br><br>
            `;
            const newLine = document.createElement('div');
            newLine.innerHTML = videosInfo;
            output.appendChild(newLine);
        } else if (command.toLowerCase() === 'articles') {
            const articlesInfo = `
                
                * <a href="https://medium.com/@melihates2004/why-do-people-leave-islam-55e2251f91f8" target="_blank" rel="noopener">Why Do People Leave Islam</a>
                <br>* <a href="https://medium.com/@melihates2004/a-turks-defense-to-the-armenian-question-7b3f93fdf783" target="_blank" rel="noopener">A Turk’s Defense To The Armenian Question</a>
                <br>* <a href="https://medium.com/@melihates2004/communism-fails-c835e147057" target="_blank" rel="noopener">Communism Fails</a>
                <br>* <a href="https://medium.com/@melihates2004/that-bruh-moment-called-life-90043f0dd512" target="_blank" rel="noopener">That Bruh Moment Called Life</a>
                <br>* <a href="https://medium.com/@melihates2004/atatürks-achievements-b4ec54a4280e" target="_blank" rel="noopener">Ataturk's Achivements</a>
                <br><br>
            `;
            const newLine = document.createElement('div');
            newLine.innerHTML = articlesInfo;
            output.appendChild(newLine);

        } else if (command.toLowerCase() === 'exit') {
            const newLine = document.createElement('div');
            newLine.textContent = 'Exiting terminal...';
            output.appendChild(newLine);
            setTimeout(() => {
                window.close();
            }, 1000);
            output.appendChild(document.createElement('br'));
        } else {
            const newLine = document.createElement('div');
            newLine.textContent = `Command "${command}" not recognized. Type "help" for available commands.`;
            output.appendChild(newLine);
        }

        output.scrollTop = output.scrollHeight;
    }
});
