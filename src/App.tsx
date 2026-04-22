import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AboutUs from './pages/AboutUs';
import CourseDetails from './pages/CourseDetails';
import PaymentPage from './pages/PaymentPage';
import Footer from './components/Footer';
import { Course as CourseType, Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);

  const handleNavigate = (page: Page, course?: CourseType) => {
    if (course) setSelectedCourse(course);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={(p) => handleNavigate(p)} onCourseClick={(c) => handleNavigate('course-details', c)} />;
      case 'courses': return <Courses onCourseClick={(c) => handleNavigate('course-details', c)} onEnroll={(c) => handleNavigate(c.isFree ? 'course-details' : 'payment', c)} />;
      case 'about': return <AboutUs />;
      case 'course-details': return selectedCourse ? <CourseDetails course={selectedCourse} onEnroll={() => handleNavigate(selectedCourse.isFree ? 'course-details' : 'payment', selectedCourse)} /> : <Home onNavigate={(p) => handleNavigate(p)} />;
      case 'payment': return selectedCourse ? <PaymentPage course={selectedCourse} onBack={() => handleNavigate('courses')} /> : <Home onNavigate={(p) => handleNavigate(p)} />;
      default: return <Home onNavigate={(p) => handleNavigate(p)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar current={currentPage as any} onNavigate={(p) => handleNavigate(p)} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={(p) => handleNavigate(p)} />
    </div>
  );
}
