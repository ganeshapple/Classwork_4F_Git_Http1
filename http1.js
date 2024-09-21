const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home Page</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <header>
                <h1>Personalized Art Gallery</h1>
                <nav>
                    <a href="index.html">Home</a>
                    <a href="register.html">Register</a>
                    <a href="login.html">Login</a>
                    <a href="about.html">About Us</a>
                    <a href="dashboard.html">Dashboard</a>
                </nav>
            </header>
            <section>
                <h2>Welcome to Our Website</h2>
                <p>Explore our features and join us today!</p>
                <a href="login.html" class="button">Login</a>
                <a href="register.html" class="button">Register</a>
            </section>
            <footer>
                <p>Contact us at codingavengers@gmail.com</p>
            </footer>
        </body>
        </html>
    `);
    res.end();
});
server.listen(9000, () => {
    console.log("Server is running @ http://localhost:9000");
});
