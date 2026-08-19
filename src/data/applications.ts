export type ApplicationStatus = 'saved' | 'applied' | 'interview' | 'offer'

export interface Application {
  id: string
  role: string
  company: string
  status: ApplicationStatus
  appliedDate?: string
  statusLabel: string
  nextStep?: string
  notes?: string
  location?: string
}

export const STATUS_COLUMNS: { id: ApplicationStatus; label: string }[] = [
  { id: 'saved', label: 'Saved' },
  { id: 'applied', label: 'Applied' },
  { id: 'interview', label: 'Interview' },
  { id: 'offer', label: 'Offer' },
]

export const applications: Application[] = [
  {
    id: '1',
    role: 'Frontend Engineer',
    company: 'Acme Labs',
    status: 'applied',
    appliedDate: 'Applied 2 days ago',
    statusLabel: 'Applied',
    nextStep: 'Follow up on application status',
    notes: 'Referred by a former classmate. Stack: React, TypeScript.',
    location: 'Remote',
  },
  {
    id: '2',
    role: 'Software Engineer',
    company: 'Northstar',
    status: 'interview',
    appliedDate: 'Applied 1 week ago',
    statusLabel: 'Technical interview',
    nextStep: 'Prepare system design notes',
    notes: 'Round 2 scheduled for Thursday at 2pm.',
    location: 'San Francisco, CA',
  },
  {
    id: '3',
    role: 'Product Intern',
    company: 'Orbit',
    status: 'saved',
    statusLabel: 'Saved',
    nextStep: 'Tailor resume for product focus',
    notes: 'Deadline in 5 days. Requires cover letter.',
    location: 'New York, NY',
  },
  {
    id: '4',
    role: 'Junior Developer',
    company: 'Harbor Tech',
    status: 'applied',
    appliedDate: 'Applied 4 days ago',
    statusLabel: 'Applied',
    nextStep: 'Review company engineering blog',
    location: 'Austin, TX',
  },
  {
    id: '5',
    role: 'Graduate Engineer',
    company: 'Summit Systems',
    status: 'interview',
    appliedDate: 'Applied 2 weeks ago',
    statusLabel: 'Phone screen',
    nextStep: 'Prepare behavioral answers',
    notes: 'Recruiter mentioned 3-round process.',
    location: 'Remote',
  },
  {
    id: '6',
    role: 'UX Engineer',
    company: 'Canvas Co',
    status: 'offer',
    appliedDate: 'Applied 3 weeks ago',
    statusLabel: 'Offer received',
    nextStep: 'Review compensation details',
    notes: 'Decision deadline: end of month.',
    location: 'Remote',
  },
  {
    id: '7',
    role: 'Backend Intern',
    company: 'Relay',
    status: 'saved',
    statusLabel: 'Saved',
    nextStep: 'Complete online assessment',
    location: 'Chicago, IL',
  },
  {
    id: '8',
    role: 'Full Stack Developer',
    company: 'Pioneer',
    status: 'applied',
    appliedDate: 'Applied yesterday',
    statusLabel: 'Applied',
    nextStep: 'Send thank-you to recruiter',
    location: 'Remote',
  },
]

export function getApplicationsByStatus(status: ApplicationStatus): Application[] {
  return applications.filter((app) => app.status === status)
}

export function getStatusColor(status: ApplicationStatus): string {
  const colors: Record<ApplicationStatus, string> = {
    saved: 'bg-stone-100 text-stone-600',
    applied: 'bg-sky-50 text-sky-700',
    interview: 'bg-amber-50 text-amber-700',
    offer: 'bg-teal-50 text-teal-700',
  }
  return colors[status]
}
