import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, Star } from 'lucide-react';
import { Property } from '../types';
import { useProperty } from '../context/PropertyContext';
import { useAuth } from '../context/AuthContext';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { toggleSaved, savedProperties } = useProperty();
  const { user } = useAuth();
  const isSaved = savedProperties.includes(property.id);

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      toggleSaved(property.id);
    }
  };

  return (
    <Link to={`/property/${property.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {property.type}
            </span>
          </div>
          {user && (
            <button
              onClick={handleSaveClick}
              className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
                isSaved
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
              }`}
            >
              <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          )}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-lg">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{property.rating}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {property.title}
            </h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                ${property.price.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
          </div>

          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} bed</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} bath</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.size} sqft</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {property.amenities.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs"
              >
                {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={property.owner.avatar}
                alt={property.owner.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-600">{property.owner.name}</span>
            </div>
            <div className="text-sm text-gray-500">
              Available {property.availableFrom}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;