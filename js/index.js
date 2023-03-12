const userDatabase = {}; 
      
      const registerForm = document.querySelector('#register form');
      const loginForm = document.querySelector('#login form');
      const outputSection = document.querySelector('#output');

      registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const usernameInput = registerForm.querySelector('#username');
        const passwordInput = registerForm.querySelector('#password');
        
        
        userDatabase[usernameInput.value] = passwordInput.value;
        
   
      
        
      
        outputSection.textContent = `User ${usernameInput.value} has been registered`;
      });
      
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const usernameInput = loginForm.querySelector('#login-username');
        const passwordInput = loginForm.querySelector('#login-password');
        
      
        const storedPassword = userDatabase[usernameInput.value];
        
        if (storedPassword === passwordInput.value) {
         
          outputSection.textContent = `Welcome, ${usernameInput.value}! Your password is ${passwordInput.value}`;
        } else {
       
          outputSection.textContent = `Login failed. Please try again.`;
        }
        
        
      });