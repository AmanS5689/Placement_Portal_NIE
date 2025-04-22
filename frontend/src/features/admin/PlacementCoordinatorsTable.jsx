import Spinner from '@/components/shared/Spinner';
import usePlacementCoordinators from './usePlacementCoordinators';
import HrBreak from '@/components/ui/HrBreak';
function PlacementCoordinatorsTable() {
  const { placementCoordinators, isLoading } = usePlacementCoordinators();
  if (isLoading) return <Spinner />;
  return (
    <>
      <h3 className="mb-[3.6rem]">Placement Coordinators</h3>
      <div className="pt-[1.6rem] px-[3.2rem] bg-[var(--color-grey-0)] mb-[6.4rem] shadow-md">
        <div className="grid grid-cols-[1.2fr_1.2fr_1fr_0.4fr_0.4fr] gap-[1.2rem] items-center px-[2rem] pt-[1.2rem] text-[1.4rem] font-semibold">
          <p>Name</p>
          <p>USN</p>
          <p>BRANCH</p>
          <p>BATCH</p>
          <p>CONTACT</p>
        </div>
        <HrBreak size="sm" />
        {placementCoordinators.map((pc) => {
          return (
            <div
              key={pc.usn}
              className="grid grid-cols-[1.2fr_1.2fr_1fr_0.4fr_0.4fr] gap-[1.2rem] items-center px-[2rem] py-[2rem] border-b-[.1rem] cursor-pointer hover:bg-slate-50"
            >
              <p>{pc.name}</p>
              <p>{pc.usn}</p>
              <p>{pc.branch}</p>
              <p>{pc.batch}</p>
              <p>{pc.contact}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PlacementCoordinatorsTable;
