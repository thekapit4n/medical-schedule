# Medical Schedule - Vue 3 + FullCalendar

A modern medical appointment scheduling application built with Vue 3, TypeScript, and FullCalendar.

## Features

- 📅 **Interactive Calendar**: FullCalendar integration with multiple view options (Month, Week, Day, List)
- 🏥 **Medical-Focused**: Designed specifically for medical appointments with appointment types
- ✨ **Modern UI**: Clean, responsive design with medical-themed color scheme
- 📱 **Mobile Responsive**: Works seamlessly on desktop and mobile devices
- 🔄 **Drag & Drop**: Events can be dragged and resized
- 📝 **Event Management**: Add, edit, and delete appointments
- 🎨 **Color Coding**: Different appointment types have distinct colors
- ⏰ **Business Hours**: Highlighted business hours (Monday-Friday, 8 AM - 6 PM)

## Appointment Types

- **Consultation** (Green): Regular patient consultations
- **Checkup** (Orange): Routine health checkups
- **Emergency** (Red): Urgent medical care
- **Follow-up** (Blue): Post-treatment follow-ups

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **FullCalendar** - Feature-rich calendar library
- **Vite** - Fast build tool
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management for Vue

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd medical-schedule
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

### Adding Appointments

1. Click the "Add Appointment" button or select a time slot on the calendar
2. Fill in the appointment details:
   - Patient name
   - Start and end times
   - Appointment type
   - Optional notes
3. Click "Add Appointment" to save

### Managing Appointments

- **View Details**: Click on any appointment to see details
- **Delete**: Click the delete button in the appointment details modal
- **Drag & Drop**: Drag appointments to reschedule them
- **Resize**: Drag the edges of appointments to change duration

### Calendar Views

- **Month View**: Overview of all appointments in a month
- **Week View**: Detailed weekly schedule with time slots
- **Day View**: Hour-by-hour view of a single day
- **List View**: List of upcoming appointments

## Project Structure

```
medical-schedule/
├── src/
│   ├── views/
│   │   └── MedicalSchedule.vue    # Main calendar component
│   ├── router/
│   │   └── index.ts              # Vue Router configuration
│   ├── assets/
│   │   └── main.css              # Global styles
│   └── App.vue                   # Root component
├── package.json
└── README.md
```

## Customization

### Adding New Appointment Types

1. Update the appointment type options in `MedicalSchedule.vue`
2. Add corresponding colors in the `getEventColor` function
3. Update the form validation if needed

### Styling

- Global styles are in `src/assets/main.css`
- Component-specific styles are in the `<style>` section of each component
- FullCalendar styles can be customized using CSS classes

### Business Hours

Business hours are configured in the `calendarOptions` object:
- Days: Monday-Friday (1-5)
- Hours: 8:00 AM - 6:00 PM

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [FullCalendar](https://fullcalendar.io/) for the excellent calendar library
- [Vue.js](https://vuejs.org/) for the progressive JavaScript framework
- Medical professionals for inspiration and feedback

---

**Note**: This is a demo application. For production use in a medical environment, ensure compliance with relevant healthcare regulations and data protection laws.
