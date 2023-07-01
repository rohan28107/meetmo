"use client"

import Image from "next/image";
import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Position
} from "reactflow";

import "reactflow/dist/base.css";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left
};


const initialNodes = [
  {
    id: "1",
    position: { x: -350, y: 200 },
    data: { label: (
      <div className="flex items-center bg-gray-700 rounded-md">
          <Image src="/assets/icons/playground/record.png" alt="Image 1" width={30} height={30} className="w-4 h-4 m-2" />
      </div>
    )},
    ...nodeDefaults
  },
  {
    id: "2",
    position: { x: -350, y: 300 },
    data: { label: (
      <div className="flex justify-between items-center bg-gray-700 rounded-r-lg rounded-md">
          <Image src="/assets/icons/playground/player.png" alt="Image 1" width={30} height={30} className="w-8 h-8 p-2" />
          <Image src="/assets/icons/playground/playerphoto.png" alt="playerphoto" width={30} height={30} className="h-full w-8 rounded-r-lg"/>
      </div>
    )},
    ...nodeDefaults
  },
  {
    id: "3",
    position: { x: -130, y: 270 },
    data: { label: (
      <div className="flex items-center bg-gradient-to-r from-blue-400 to-cyan-500 rounded-md">
          <Image src="/assets/icons/playground/joiner.png" alt="Image 1" width={30} height={30} className="w-4 h-4 m-2" />
      </div>
    )},
    ...nodeDefaults
  },
  {
    id: "4",
    position: { x: 50, y: 270 },
    data: { label: (
      <div className="flex justify-between items-center bg-gray-700 rounded-r-lg rounded-md">
          <Image src="/assets/icons/playground/player.png" alt="Image 1" width={30} height={30} className="w-8 h-8 p-2" />
          <Image src="/assets/icons/playground/playerphoto.png" alt="playerphoto" width={30} height={30} className="h-full w-8 rounded-r-lg"/>
      </div>
    )},
    ...nodeDefaults
  }
];

const initialEdges = [
  {
    id: "e2-3",
    source: "2",
    target: "3",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4"
  }
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  const edgestyles = {
    border: "6px solid",
    borderImageSource: "linear-gradient(80.15deg, #3D44D9 27.01%, #01C5FF 113.04%)",
    borderImageSlice: 1,
  };

  

  return (
    <div style={{  position:'absolute', left: '80px', top: '150px', zIndex: 200, height: '550px', width: '900px'}}>
      <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            edgeStyles={edgestyles}
            fitView
          >
            {/* <Background /> */}
            <Controls />
      </ReactFlow>
      </div>
      
  );
};

export default Flow;
