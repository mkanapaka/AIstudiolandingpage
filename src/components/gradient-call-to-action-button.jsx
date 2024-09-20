"use client";
import React from "react";

function GradientCallToActionButton({ text }) {
  return (
    <button className="px-8 py-4 bg-gradient-to-r from-[#964230] to-[#FC6F50] text-black text-lg font-bold rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center group transition-all duration-300">
      <span className="mr-2 group-hover:text-white">{text}</span>
      <i className="fas fa-arrow-right text-black group-hover:text-white transform group-hover:rotate-[-45deg] transition-transform duration-300"></i>
    </button>
  );
}

function GradientCallToActionButtonStory() {
  return (
    <div className="space-y-4">
      <GradientCallToActionButton text="Book a Call" />
      <GradientCallToActionButton text="Join Now" />
    </div>
  );
}

export default GradientCallToActionButton;