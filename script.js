 // Matrix rain effect
        const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");

        const fontSize = 10;
        const columns = canvas.width / fontSize;

        const drops = [];
        for(let x = 0; x < columns; x++) {
            drops[x] = 1; 
        }

        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px monospace';
            
            for(let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(drawMatrix, 35);

        // Resize canvas when window resizes
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Typing effect for welcome text (one time only)
        const welcomeMessage = "WELCOME TO CodeCraftMaster101 ARCHIVE - SECURE FILE REPOSITORY INITIALIZED";
        let charIndex = 0;
        let currentMessage = "";

        function typeWriter() {
            if (charIndex < welcomeMessage.length) {
                currentMessage += welcomeMessage.charAt(charIndex);
                document.getElementById('welcome-text').textContent = currentMessage;
                charIndex++;
                setTimeout(typeWriter, 100);
            }
            // Animation stops after completing once
        }

        // Current time display
        function updateTime() {
            const now = new Date();
            document.getElementById('current-time').textContent = now.toLocaleTimeString();
            document.getElementById('last-update').textContent = now.toLocaleDateString();
        }

        // Download function
        function downloadFile(button) {
            const fileUrl = button.getAttribute("data-link");  // ناخذ الرابط من data-link
            const link = document.createElement('a');
            link.href = fileUrl;
            link.setAttribute('download', ''); // يخلي المتصفح يحاول يحمله
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            console.log('Downloading from ${fileUrl}');
        }

        // Initialize
        typeWriter();
        updateTime();
        setInterval(updateTime, 1000);

        // Add some interactive effects
        document.querySelectorAll('.file-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.borderColor = '#00ff88';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.borderColor = '#00ff41';
            });

        });
        // JavaScript
        document.getElementById('youtubeIcon').addEventListener('click', function() {
            // لفتح في نافذة جديدة:
            window.open('https://www.youtube.com/@CodeCraftMaster-0101');

            // أو لفتح في نفس التبويب:
            // window.location.href = 'https://www.youtube.com';
        });
