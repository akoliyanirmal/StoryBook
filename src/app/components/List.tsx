import React from "react";
import { MdMoveToInbox, MdDrafts } from "react-icons/md";

const List: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <div className="flex items-center mb-2">
          <MdMoveToInbox className="text-blue-500 mr-2" />
          <div className="font-bold text-xl ml-2">Inbox</div>
        </div>
        <div className="flex items-center mb-2">
          <MdDrafts className="text-yellow-500 mr-2" />
          <div className="font-bold text-xl ml-2">Drafts</div>
        </div>
        <div className="border-t border-gray-300 my-2"></div>
        <div className="font-bold text-xl mb-2">Trash</div>
        <div className="font-bold text-xl mb-2">Spam</div>
      </div>
    </div>
  );
};

export default List;
