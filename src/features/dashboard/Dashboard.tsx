import AppointmentTable from "../../components/common/AppointmentTable";
import ChartPlaceholder from "../../components/common/ChartPlaceholder";
import KPICard from "../../components/common/KPICard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <KPICard title="Patients" value="1,234" />
        <KPICard title="Appointments" value="342" />
        <KPICard title="Doctors" value="16" />
        <KPICard title="Revenue" value="$45,000" />
      </div>

      {/* Chart + Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPlaceholder />
        <AppointmentTable />
      </div>
    </div>
  );
};

export default Dashboard;
