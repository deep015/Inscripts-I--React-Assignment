interface RowProps {
  index: number;
  request?: string;
  submitted?: string;
  status?: string;
  submitter?: string;
  url?: string;
  assigned?: string;
  priority?: string;
  due?: string;
  value?: string;
}

const statusColors: Record<string, string> = {
  'In-process': 'bg-yellow-100 text-yellow-800',
  'Need to start': 'bg-orange-100 text-orange-800',
  'Complete': 'bg-green-100 text-green-800',
  'Blocked': 'bg-red-100 text-red-800',
};

const priorityColors: Record<string, string> = {
  'High': 'text-red-600',
  'Medium': 'text-yellow-600',
  'Low': 'text-blue-600',
};

const SpreadsheetRow = ({
  index,
  request,
  submitted,
  status,
  submitter,
  url,
  assigned,
  priority,
  due,
  value,
}: RowProps) => {
  return (
    <tr className="hover:bg-gray-50 border-t border-gray-50">
      <td className="px-4 py-2 text-gray-500 font-mono">{index + 1}</td>
      <td className="px-4 py-2">{request || ''}</td>
      <td className="px-4 py-2">{submitted || ''}</td>
      <td className="px-4 py-2">
        {status && (
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[status] || 'bg-gray-200'}`}>
            {status}
          </span>
        )}
      </td>
      <td className="px-4 py-2">{submitter || ''}</td>
      <td className="px-4 py-2 text-blue-500 underline cursor-pointer">{url || ''}</td>
      <td className="px-4 py-2">{assigned || ''}</td>
      <td className="px-4 py-2 font-medium">
        <span className={priority ? priorityColors[priority] : ''}>{priority || ''}</span>
      </td>
      <td className="px-4 py-2 ">{due || ''}</td>
      <td className="px-4 py-2 border-r-2 border-dashed border-gray-300">{value || ''}</td>
      <td className="px-10 py-2 text-center text-gray-400 border-r-2 border-dashed border-gray-300"></td>
    </tr>
  );
};

export default SpreadsheetRow;
