# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and React. Features smooth animations, interactive elements, and a clean, professional design.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Interactive Navigation**: Smooth scrolling navigation with active states
- **Modern UI**: Clean, professional design with gradient backgrounds and shadows
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Interactive project cards with hover effects
- **Skills Section**: Animated progress bars for skill levels
- **Timeline**: Beautiful timeline for experience and education sections

## Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal information and statistics
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Portfolio showcase with project details
5. **Experience**: Professional work experience timeline
6. **Education**: Educational background timeline
7. **Contact**: Contact form and information

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript**: Interactive functionality and DOM manipulation
- **React**: Component-based architecture (via CDN)
- **Font Awesome**: Icons
- **Google Fonts**: Poppins font family

## Setup Instructions

1. **Clone or Download**: Download all files to your local machine
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **No Build Process Required**: The project uses CDN links for React and other dependencies

## Customization

### Personal Information
Update the following in `app.js`:

- **Name**: Change "Your Name" in the Hero section
- **Title**: Update "Full Stack Developer" to your profession
- **Description**: Modify the about text and description
- **Contact Info**: Update email, phone, and location in the Contact section
- **Social Links**: Add your social media links in the Footer component

### Profile Images
Replace the placeholder images with your own:

- **Hero Image**: Update the `src` attribute in the Hero component
- **About Image**: Update the `src` attribute in the About component

### Projects
Modify the `projects` array in the Projects component:

```javascript
const projects = [
    {
        title: "Your Project Title",
        description: "Project description",
        image: "path/to/your/image.jpg",
        tech: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://your-project-url.com",
        githubUrl: "https://github.com/yourusername/project"
    }
    // Add more projects...
];
```

### Skills
Update the `skills` object in the Skills component:

```javascript
const skills = {
    frontend: [
        { name: 'Your Skill', level: 90 },
        // Add more skills...
    ],
    // Add more categories...
};
```

### Experience & Education
Update the respective arrays in the Experience and Education components with your information.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Efficient CSS animations
- Minimal JavaScript footprint
- Fast loading times

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back with the community!

## Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

