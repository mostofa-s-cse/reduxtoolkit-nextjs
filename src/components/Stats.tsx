export default function Stats ({ TotalCount }) {
    return (
        <div className="w-1/3 mx-auto">
            <div className="p-4 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div className="text-2xl font-semibold">
                    Total count : {TotalCount}
                </div>
            </div>
        </div>
    );
};
