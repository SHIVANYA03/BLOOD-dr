import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function RecentRequests() {
  const requests = [
    {
      id: "REQ-5678",
      hospital: "City General Hospital",
      bloodType: "O-",
      date: "2023-05-01",
      units: 2,
      status: "Pending",
      urgent: true,
    },
    {
      id: "REQ-5679",
      hospital: "Memorial Hospital",
      bloodType: "AB+",
      date: "2023-05-01",
      units: 3,
      status: "Approved",
      urgent: false,
    },
    {
      id: "REQ-5680",
      hospital: "St. Mary's Medical Center",
      bloodType: "A+",
      date: "2023-04-30",
      units: 1,
      status: "Fulfilled",
      urgent: false,
    },
    {
      id: "REQ-5681",
      hospital: "University Hospital",
      bloodType: "B-",
      date: "2023-04-30",
      units: 2,
      status: "Pending",
      urgent: true,
    },
    {
      id: "REQ-5682",
      hospital: "Children's Hospital",
      bloodType: "O+",
      date: "2023-04-29",
      units: 4,
      status: "Approved",
      urgent: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "Approved":
        return "bg-blue-500 hover:bg-blue-600"
      case "Fulfilled":
        return "bg-green-500 hover:bg-green-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Request ID</TableHead>
            <TableHead>Hospital</TableHead>
            <TableHead>Blood Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Units</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell className="font-medium">{request.id}</TableCell>
              <TableCell>{request.hospital}</TableCell>
              <TableCell>
                <Badge variant="outline" className="font-bold">
                  {request.bloodType}
                </Badge>
              </TableCell>
              <TableCell>{request.date}</TableCell>
              <TableCell>{request.units}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                  {request.urgent && <Badge className="bg-red-500">Urgent</Badge>}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  Process
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
