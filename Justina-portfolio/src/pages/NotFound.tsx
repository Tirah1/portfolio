import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-poppins font-bold text-warm-orange mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-warm-dark mb-6">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;