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
import Mediaplayer from "./Mediaplayer";
import Form from "./Form";

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
    target: "3"
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

  return (
  //   <ReactFlow
  //     nodes={nodes}
  //     edges={edges}
  //     onNodesChange={onNodesChange}
  //     onEdgesChange={onEdgesChange}
  //     onConnect={onConnect}
  //     style={{ backgroundColor: '#272C34' }}
  //     fitView
  //   >
  //   <Background />
  //   <Controls />
  //   {/* <MiniMap /> */}
  // </ReactFlow>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ backgroundColor: '#272C34' }}
        fitView
      >
        <Background />
        <Controls />
        {/* <MiniMap /> */} 
    </ReactFlow>
  );
};

export default Flow;
