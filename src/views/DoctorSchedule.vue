<template>
  <div class="doctor-schedule">
    <!-- Header -->
    <header class="demo-header">
      <div class="container">
        <h1>Doctor Schedule</h1>
        <p>Medical staff scheduling system</p>
      </div>
    </header>

    <!-- Demo Content -->
    <main class="demo-content">
      <div class="container">
        <!-- Dr. Fatimah Schedule -->
        <div class="demo-section">
          <h2>Dr. Fatimah Schedule</h2>
          <p>Monthly schedule for Dr. Fatimah</p>
          <div class="calendar-wrapper">
            <FullCalendar :options="basicCalendarOptions" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

// Demo navigation
const demos = [{ id: 'basic', name: 'Basic' }]

const currentDemo = ref('basic')

// Dr. Fatimah Schedule Options
const basicCalendarOptions = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  },
  events: [
    // August 1, 2025 - PT (PETANG 1500-2400)
    {
      title: 'PETANG (1500-2400)',
      start: '2025-08-01T15:00:00',
      end: '2025-08-01T24:00:00',
      color: '#FF6B6B',
    },

    // August 2, 2025 - P (PAGI 0800-1600)
    {
      title: 'PAGI (0800-1600)',
      start: '2025-08-02T08:00:00',
      end: '2025-08-02T16:00:00',
      color: '#4ECDC4',
    },

    // August 3, 2025 - P (PAGI 0800-1600)
    {
      title: 'PAGI (0800-1600)',
      start: '2025-08-03T08:00:00',
      end: '2025-08-03T16:00:00',
      color: '#4ECDC4',
    },

    // August 4, 2025 - P (PAGI 0800-1600)
    {
      title: 'PAGI (0800-1600)',
      start: '2025-08-04T08:00:00',
      end: '2025-08-04T16:00:00',
      color: '#4ECDC4',
    },

    // August 5, 2025 - HK (Cuti)
    { title: 'Cuti', start: '2025-08-05', end: '2025-08-05', color: '#FFE66D' },

    // August 6, 2025 - M (MALAM 2200-0900)
    {
      title: 'MALAM (2200-0900)',
      start: '2025-08-06T22:00:00',
      end: '2025-08-07T09:00:00',
      color: '#2C3E50',
    },

    // August 7, 2025 - LM (LEPAS MALAM)
    { title: 'LEPAS MALAM', start: '2025-08-07', end: '2025-08-07', color: '#95A5A6' },

    // August 8, 2025 - HK (Cuti)
    { title: 'Cuti', start: '2025-08-08', end: '2025-08-08', color: '#FFE66D' },

    // August 9, 2025 - PT (PETANG 1500-2400)
    {
      title: 'PETANG (1500-2400)',
      start: '2025-08-09T15:00:00',
      end: '2025-08-09T24:00:00',
      color: '#FF6B6B',
    },

    // August 10, 2025 - M (MALAM 2200-0900)
    {
      title: 'MALAM (2200-0900)',
      start: '2025-08-10T22:00:00',
      end: '2025-08-11T09:00:00',
      color: '#2C3E50',
    },

    // August 11, 2025 - LM (LEPAS MALAM)
    { title: 'LEPAS MALAM', start: '2025-08-11', end: '2025-08-11', color: '#95A5A6' },

    // August 12, 2025 - P (PAGI 0800-1600)
    {
      title: 'PAGI (0800-1600)',
      start: '2025-08-12T08:00:00',
      end: '2025-08-12T16:00:00',
      color: '#4ECDC4',
    },

    // August 13, 2025 - P (PAGI 0800-1600)
    {
      title: 'PAGI (0800-1600)',
      start: '2025-08-13T08:00:00',
      end: '2025-08-13T16:00:00',
      color: '#4ECDC4',
    },

    // August 14, 2025 - HK (Cuti)
    { title: 'Cuti', start: '2025-08-14', end: '2025-08-14', color: '#FFE66D' },

    // August 15, 2025 - HK (Cuti)
    { title: 'Cuti', start: '2025-08-15', end: '2025-08-15', color: '#FFE66D' },

    // August 16, 2025 - HK (Cuti)
    { title: 'Cuti', start: '2025-08-16', end: '2025-08-16', color: '#FFE66D' },

    // August 17, 2025 - PT (PETANG 1500-2400)
    {
      title: 'PETANG (1500-2400)',
      start: '2025-08-17',
      end: '2025-08-17',
      color: '#FF6B6B',
    },

    // August 18, 2025 - P (PAGI 0800-1600)
    {
      title: 'PAGI (0800-1600)',
      start: '2025-08-18',
      end: '2025-08-18',
      color: '#4ECDC4',
    },

    // August 19, 2025 - M (MALAM 2200-0900)
    {
      title: 'MALAM (2200-0900)',
      start: '2025-08-19',
      end: '2025-08-19',
      color: '#2C3E50',
    },

    // August 20, 2025 - LM (LEPAS MALAM)
    { title: 'LEPAS MALAM', start: '2025-08-20', end: '2025-08-20', color: '#95A5A6' },

    // August 21, 2025 - PT (PETANG 1500-2400)
    {
      title: 'PETANG (1500-2400)',
      start: '2025-08-21',
      end: '2025-08-21',
      color: '#FF6B6B',
    },

    // August 22, 2025 - HK (Cuti)
    { title: 'Cuti', start: '2025-08-22', end: '2025-08-22', color: '#FFE66D' },

    // August 23, 2025 - M (MALAM 2200-0900)
    {
      title: 'MALAM (2200-0900)',
      start: '2025-08-23',
      end: '2025-08-23',
      color: '#2C3E50',
    },

    // August 24, 2025 - LM (LEPAS MALAM)
    { title: 'LEPAS MALAM', start: '2025-08-24', end: '2025-08-24', color: '#95A5A6' },

    // August 25, 2025 - PT (PETANG 1500-2400)
    {
      title: 'PETANG (1500-2400)',
      start: '2025-08-25',
      end: '2025-08-25',
      color: '#FF6B6B',
    },

    // August 26, 2025 - P (PAGI 0800-1600)
    {
      title: 'PAGI (0800-1600)',
      start: '2025-08-26',
      end: '2025-08-26',
      color: '#4ECDC4',
    },

    // August 27, 2025 - M (MALAM 2200-0900)
    {
      title: 'MALAM (2200-0900)',
      start: '2025-08-27',
      end: '2025-08-27',
      color: '#2C3E50',
    },

    // August 28, 2025 - LM (LEPAS MALAM)
    { title: 'LEPAS MALAM', start: '2025-08-28', end: '2025-08-28', color: '#95A5A6' },

    // August 29, 2025 - PT (PETANG 1500-2400)
    {
      title: 'PETANG (1500-2400)',
      start: '2025-08-29',
      end: '2025-08-29',
      color: '#FF6B6B',
    },

    // August 30, 2025 - P (PAGI 0800-1600)
    {
      title: 'PAGI (0800-1600)',
      start: '2025-08-30',
      end: '2025-08-30',
      color: '#4ECDC4',
    },

    // August 31, 2025 - HK (Cuti)
    { title: 'Cuti', start: '2025-08-31', end: '2025-08-31', color: '#FFE66D' },
  ],
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  timeZone: 'Asia/Kuala_Lumpur',
})
</script>

<style scoped>
.doctor-schedule {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.demo-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px 0;
  text-align: center;
}

.demo-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 10px 0;
}

.demo-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
}

/* Demo Content */
.demo-content {
  padding: 40px 0;
}

.demo-section {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  overflow: hidden;
}

.demo-section h2 {
  margin: 0;
  padding: 20px 30px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  color: #495057;
  font-size: 1.5rem;
  font-weight: 600;
}

.demo-section p {
  margin: 0;
  padding: 15px 30px;
  color: #6c757d;
  border-bottom: 1px solid #e9ecef;
}

.calendar-wrapper {
  padding: 20px;
  min-height: 500px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .demo-header h1 {
    font-size: 2rem;
  }

  .container {
    padding: 0 15px;
  }
}

/* FullCalendar Custom Styles */
:deep(.fc) {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

:deep(.fc-toolbar-title) {
  font-size: 1.5rem !important;
  font-weight: 600;
  color: #495057;
}

:deep(.fc-button-primary) {
  background-color: #667eea !important;
  border-color: #667eea !important;
  color: white !important;
}

:deep(.fc-button-primary:hover) {
  background-color: #5a6fd8 !important;
  border-color: #5a6fd8 !important;
}

:deep(.fc-button-primary:focus) {
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3) !important;
}

:deep(.fc-button-primary:disabled) {
  background-color: #6c757d !important;
  border-color: #6c757d !important;
}

/* View selector buttons - only active view has color */
:deep(.fc-button-group .fc-button-primary) {
  background-color: #f8f9fa !important;
  border-color: #dee2e6 !important;
  color: #6c757d !important;
}

:deep(.fc-button-group .fc-button-primary:hover) {
  background-color: #e9ecef !important;
  border-color: #dee2e6 !important;
  color: #495057 !important;
}

:deep(.fc-button-group .fc-button-primary:focus) {
  box-shadow: 0 0 0 3px rgba(108, 117, 125, 0.3) !important;
}

/* Active view button */
:deep(.fc-button-group .fc-button-primary.fc-button-active) {
  background-color: #667eea !important;
  border-color: #667eea !important;
  color: white !important;
}

:deep(.fc-button-group .fc-button-primary.fc-button-active:hover) {
  background-color: #5a6fd8 !important;
  border-color: #5a6fd8 !important;
  color: white !important;
}

:deep(.fc-daygrid-day-number) {
  color: #495057;
  font-weight: 500;
}

:deep(.fc-col-header-cell) {
  background-color: #f8f9fa;
  border-color: #e9ecef;
}

:deep(.fc-col-header-cell-cushion) {
  color: #495057;
  font-weight: 600;
  text-decoration: none;
}

:deep(.fc-daygrid-day) {
  border-color: #e9ecef;
}

:deep(.fc-daygrid-day:hover) {
  background-color: #f8f9fa;
}

:deep(.fc-day-today) {
  background-color: #e3f2fd !important;
}

:deep(.fc-event) {
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 12px;
}

:deep(.fc-event-title) {
  font-weight: 600;
  color: #000 !important;
}

:deep(.fc-event-main) {
  color: #000 !important;
}

:deep(.fc-event-time) {
  color: #000 !important;
}

:deep(.fc-event-dot) {
  background-color: #000 !important;
  border-color: #000 !important;
}

/* List view event styling for better text visibility */
:deep(.fc-list-event) {
  background-color: rgba(255, 255, 255, 0.95) !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  border-radius: 4px !important;
  margin-bottom: 2px !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
}

:deep(.fc-list-event-title) {
  color: #000 !important;
  font-weight: 600 !important;
  font-size: 14px !important;
}

:deep(.fc-list-event-time) {
  color: #495057 !important;
  font-weight: 500 !important;
  font-size: 13px !important;
}

:deep(.fc-list-event-dot) {
  border-width: 3px !important;
  border-radius: 50% !important;
}

/* List view day headers */
:deep(.fc-list-day-text) {
  color: #495057 !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
}

:deep(.fc-list-day-side-text) {
  color: #6c757d !important;
  font-weight: 600 !important;
  font-size: 14px !important;
}

/* Mobile-specific list view improvements */
@media (max-width: 768px) {
  :deep(.fc-list-event) {
    padding: 8px 12px !important;
    margin-bottom: 3px !important;
  }

  :deep(.fc-list-event-title) {
    font-size: 13px !important;
    line-height: 1.3 !important;
  }

  :deep(.fc-list-event-time) {
    font-size: 12px !important;
  }

  :deep(.fc-list-day-text) {
    font-size: 14px !important;
  }

  :deep(.fc-list-day-side-text) {
    font-size: 12px !important;
  }
}
</style>
