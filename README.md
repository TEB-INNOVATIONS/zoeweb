# DR.Zoe - Where Technology Meets Healthcare

A modern, responsive website for DR.Zoe AI Doctor project developed by TEB Innovations.

## Features

- **Modern Design**: Beautiful UI with smooth animations using AOS library
- **Responsive**: Fully responsive design that works on all devices
- **Loading Screen**: Professional loading animation on page load
- **Login System**: Admin authentication system with dashboard access
- **Admin Dashboard**: Complete APK version management system
- **Animations**: Smooth scroll animations and interactive elements
- **Professional Color Theme**: Custom color scheme with pink (#ed127c) and blue (#2797dc) accents

## Technologies Used

- HTML5
- CSS3 (Custom animations and responsive design)
- JavaScript (jQuery)
- Bootstrap 5
- AOS (Animate On Scroll)
- Font Awesome Icons
- Google Fonts (Poppins)

## File Structure

```
zoeweb/
│
├── index.html              # Main landing page
├── dashboard.html          # Admin dashboard page
├── README.md              # This file
│
├── css/
│   └── style.css          # Custom styles with color theme
│
└── js/
    └── script.js          # JavaScript functionality
```

## Login Credentials

To access the admin dashboard:
- **Username**: `admin`
- **Password**: `zoe@teb`

## How to Use

1. **Open the Website**: Open `index.html` in your web browser
2. **Navigate**: Use the navigation menu to explore different sections
3. **Login**: Click the "Login" button in the navigation and enter credentials
4. **Dashboard**: After successful login, you'll be redirected to the dashboard
5. **APK Management**: In the dashboard, you can view and manage APK versions

## Customization Guide

### Replace Placeholder Images

All images use placeholder URLs. Replace them with your actual images:

1. Find all instances of `https://via.placeholder.com/...` in `index.html`
2. Replace with your actual image URLs or local paths
3. Recommended image locations:
   - Hero section: 600x600px
   - About sections: 600x400px
   - Features: Icons or small images
   - Team logo: 150x150px

### Update Content

- **index.html**: Edit text content directly in the HTML
- **Dashboard**: Modify APK versions table in `dashboard.html`
- **Colors**: All colors are defined in CSS variables in `css/style.css`

### Color Theme Variables

Located at the top of `css/style.css`:

```css
:root {
    --c-dark: #212529;
    --c-brand: #ed127c;
    --c-brand-light: #ee509c;
    --c-body: #2797dc;
}
```

### Add More APK Versions

In `dashboard.html`, locate the `<tbody id="apkTableBody">` section and add new rows:

```html
<tr>
    <td>
        <div class="d-flex align-items-center">
            <i class="fas fa-android fa-2x text-success me-3"></i>
            <div>
                <div class="fw-bold">Zoe Connect v6.0</div>
                <small class="text-muted">Your Description</small>
            </div>
        </div>
    </td>
    <td>2024-12-01</td>
    <td>50.0 MB</td>
    <td><span class="badge bg-primary">0</span></td>
    <td><span class="badge bg-success">Active</span></td>
    <td>
        <button class="btn btn-sm btn-brand" onclick="downloadAPK('zoe-connect-v6.0.apk')">
            <i class="fas fa-download"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger" onclick="deleteVersion(6)">
            <i class="fas fa-trash"></i>
        </button>
    </td>
</tr>
```

## Features Breakdown

### Main Website (index.html)

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Detailed project information
3. **Features Section**: 9 feature cards showcasing Dr. Zoe capabilities
4. **Technology Section**: Technology stack and Zoe Connect app details
5. **Impact Section**: Statistics and UN SDG 3 support
6. **Team Section**: TEB Innovations team highlight
7. **Contact Section**: Download links and social media
8. **Footer**: Quick links and contact information

### Admin Dashboard (dashboard.html)

1. **Statistics Cards**: Overview of downloads, users, versions, and ratings
2. **APK Versions Table**: Complete list of all app versions with actions
3. **Analytics Section**: Download analytics and insights
4. **Recent Activity**: Timeline of recent events
5. **Add Version Modal**: Form to upload new APK versions

## Security Notes

- Login credentials are stored in JavaScript (for demo purposes)
- For production, implement proper backend authentication
- Session management uses `sessionStorage`
- Auto-logout after 30 minutes of inactivity

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Lazy loading for images
- Debounced scroll events
- Minified libraries via CDN
- Smooth animations with CSS transforms
- AOS animations load once

## Future Enhancements

- Add actual APK file upload functionality
- Integrate with backend API
- Add user analytics dashboard
- Implement real-time notifications
- Add multi-language support
- Create mobile app version
- Add PWA support

## Support

For issues or questions, contact:
- Email: contact@tebinnovations.in
- Website: www.zoe.tebinnovations.in

## Credits

- Developed by: TEB Innovations
- Project: DR.Zoe AI Doctor
- Year: 2024

## License

© 2024 DR.Zoe - TEB Innovations. All rights reserved.

---

**Note**: This is a demonstration website. For production deployment, ensure you:
1. Replace all placeholder images
2. Implement proper backend authentication
3. Add real APK file hosting and download functionality
4. Set up analytics tracking
5. Implement proper security measures
6. Test thoroughly across all devices and browsers
