import { create } from 'zustand';
import { Ticket } from '../types/ticket';

interface TicketStore {
  tickets: Ticket[];
  isLoading: boolean;
  error: string | null;
  fetchTickets: () => Promise<void>;
  addTicket: (ticket: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateTicket: (id: string, updates: Partial<Ticket>) => Promise<void>;
}

export const useTickets = create<TicketStore>((set) => ({
  tickets: [],
  isLoading: false,
  error: null,
  fetchTickets: async () => {
    set({ isLoading: true });
    try {
      // In a real app, this would be an API call
      const mockTickets: Ticket[] = [
        {
          id: '1',
          subject: 'Login Issue',
          description: 'Unable to access account',
          status: 'open',
          priority: 'high',
          createdAt: new Date(),
          updatedAt: new Date(),
          customerId: 'customer-1'
        }
      ];
      set({ tickets: mockTickets, error: null });
    } catch (error) {
      set({ error: 'Failed to fetch tickets' });
    } finally {
      set({ isLoading: false });
    }
  },
  addTicket: async (ticket) => {
    set({ isLoading: true });
    try {
      const newTicket: Ticket = {
        ...ticket,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      set((state) => ({
        tickets: [...state.tickets, newTicket],
        error: null
      }));
    } catch (error) {
      set({ error: 'Failed to add ticket' });
    } finally {
      set({ isLoading: false });
    }
  },
  updateTicket: async (id, updates) => {
    set({ isLoading: true });
    try {
      set((state) => ({
        tickets: state.tickets.map((ticket) =>
          ticket.id === id
            ? { ...ticket, ...updates, updatedAt: new Date() }
            : ticket
        ),
        error: null
      }));
    } catch (error) {
      set({ error: 'Failed to update ticket' });
    } finally {
      set({ isLoading: false });
    }
  }
}));