export const MainSkeleton = () => (
  <div
    role="status"
    className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
  >
    <div className="min-h-full bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
    <div className="w-48 min-h-full mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div className="flex items-baseline mt-4 space-x-6">
      <div className="w-full bg-gray-200 rounded-t-lg h-24 dark:bg-gray-700"></div>
      <div className="w-full h-16 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
      <div className="w-full bg-gray-200 rounded-t-lg h-24 dark:bg-gray-700"></div>
      <div className="w-full h-16 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
      <div className="w-full bg-gray-200 rounded-t-lg h-10 dark:bg-gray-700"></div>
      <div className="w-full bg-gray-200 rounded-t-lg h-24 dark:bg-gray-700"></div>
      <div className="w-full bg-gray-200 rounded-t-lg h-10 dark:bg-gray-700"></div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);

export const TableSkeleton = () => (
  <div className="h-18 p-2  border-2 rounded-md w-[133px]">
    <div className="flex flex-row items-center justify-center h-full space-x-2 animate-pulse">
      <div className="flex flex-col space-y-2">
        <div className="h-3 bg-gray-300 rounded-md w-12 "></div>
        <div className="w-12 h-3 bg-gray-300 rounded-md "></div>
        <div className="w-12 h-3 bg-gray-300 rounded-md "></div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="h-3 bg-gray-300 rounded-md w-12 "></div>
        <div className="w-12 h-3 bg-gray-300 rounded-md "></div>
        <div className="w-12 h-3 bg-gray-300 rounded-md "></div>
      </div>
    </div>
  </div>
);
