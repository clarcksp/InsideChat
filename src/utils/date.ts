import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = (date: Date): string => {
  return format(date, 'MMM dd, yyyy');
};

export const formatDateTime = (date: Date): string => {
  return format(date, 'MMM dd, yyyy HH:mm');
};

export const getRelativeTime = (date: Date): string => {
  return formatDistanceToNow(date, { addSuffix: true });
};