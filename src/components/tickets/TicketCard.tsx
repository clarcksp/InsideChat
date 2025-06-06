import React from 'react';
import { Ticket } from '../../types/ticket';
import { Badge } from '../common/Badge';
import { getStatusColor, getPriorityColor } from '../../utils/status';
import { getRelativeTime } from '../../utils/date';

interface TicketCardProps {
  ticket: Ticket;
  onClick?: (ticket: Ticket) => void;
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket, onClick }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onClick?.(ticket)}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-medium text-gray-900">{ticket.subject}</h3>
        <Badge
          text={ticket.status}
          className={getStatusColor(ticket.status)}
        />
      </div>
      
      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
        {ticket.description}
      </p>
      
      <div className="mt-4 flex items-center justify-between">
        <Badge
          text={ticket.priority}
          className={getPriorityColor(ticket.priority)}
        />
        <span className="text-sm text-gray-500">
          {getRelativeTime(ticket.updatedAt)}
        </span>
      </div>
    </div>
  );
};