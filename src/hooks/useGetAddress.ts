import React from 'react';
import { I_OSMAddressDetails } from '../types';

const osmCoordURL = (lat: number, lng: number) =>
  `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&polygon=1&addressdetails=1`;

export function useGetAddress() {
  const [address, setAddress] = React.useState<I_OSMAddressDetails>();
  const [error, setError] = React.useState<Error>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [clicked, setClicked] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (clicked) {
      navigator.geolocation.getCurrentPosition((location) => {
        const { latitude: lat, longitude: lng } = location.coords;
        fetch(osmCoordURL(lat, lng))
          .then((res) => res.json())
          .then((res: I_OSMAddressDetails) => {
            console.log(res);
            setLoading(false);
            setAddress(res);
          })
          .catch((err: Error) => {
            console.error(err);
            setLoading(false);
            setError(err);
          });
      });
    }
  }, [clicked]);

  const handleClicked = React.useCallback(() => {
    setClicked(!clicked);
  }, [clicked]);

  return { address, error, handleClicked, loading };
}
