import React from 'react';
import { useTickets } from '../../hooks/useTickets';
import { TicketCard } from './TicketCard';

export const TicketList: React.FC = () => {
  const { tickets, isLoading, error } = useTickets();

  if (isLoading) {
    return <div className="text-center">Loading tickets...</div>;
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onClick={(ticket) => console.log('Clicked ticket:', ticket.id)}
        />
      ))}
    </div>
  );
};