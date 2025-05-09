"use client";

import { motion } from "motion/react";

const LogoCloud = () => {
  const logos = [
    {
      name: "Company 1",
      logo: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      name: "Company 2",
      logo: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      name: "Company 3",
      logo: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "Company 4",
      logo: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
    },
    {
      name: "Company 5",
      logo: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      name: "Company 6",
      logo: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gray-400 text-base font-rubik">
            These companies trust Aidita
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8 items-center justify-items-center">
          {/* Pitch */}
          <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
            <text
              x="0"
              y="24"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="24"
              fill="white"
            >
              Pitch
            </text>
          </svg>
          {/* Dashlane */}
          <svg width="110" height="32" viewBox="0 0 110 32" fill="none">
            <text
              x="0"
              y="24"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="22"
              fill="white"
            >
              DASHLANE
            </text>
          </svg>
          {/* Epic Games */}
          <svg width="50" height="32" viewBox="0 0 50 32" fill="none">
            <rect x="0" y="0" width="50" height="32" rx="6" fill="white" />
            <text
              x="25"
              y="19"
              textAnchor="middle"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="13"
              fill="#232323"
            >
              EPIC
            </text>
            <text
              x="25"
              y="29"
              textAnchor="middle"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="9"
              fill="#232323"
            >
              GAMES
            </text>
          </svg>
          {/* Medium */}
          <svg width="110" height="32" viewBox="0 0 110 32" fill="none">
            <text
              x="0"
              y="24"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="22"
              fill="white"
            >
              ●● Medium
            </text>
          </svg>
          {/* Star Atlas */}
          <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
            <text
              x="0"
              y="24"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="22"
              fill="white"
            >
              STAR ATLAS
            </text>
          </svg>
          {/* Census */}
          <svg width="110" height="32" viewBox="0 0 110 32" fill="none">
            <circle cx="16" cy="16" r="13" fill="white" />
            <text
              x="35"
              y="24"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="22"
              fill="white"
            >
              Census
            </text>
          </svg>
          {/* Ruter# */}
          <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
            <text
              x="0"
              y="24"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="22"
              fill="white"
            >
              Ruter#
            </text>
          </svg>
          {/* Comcast Business */}
          <svg width="140" height="32" viewBox="0 0 140 32" fill="none">
            <text
              x="0"
              y="16"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="15"
              fill="white"
            >
              COMCAST
            </text>
            <text
              x="0"
              y="32"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="15"
              fill="white"
            >
              BUSINESS
            </text>
          </svg>
          {/* in the Pocket */}
          <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
            <text
              x="0"
              y="15"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="10"
              fill="white"
            >
              in the
            </text>
            <text
              x="0"
              y="32"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="22"
              fill="white"
            >
              Pocket
            </text>
          </svg>
          {/* Pelo Studio */}
          <svg width="110" height="32" viewBox="0 0 110 32" fill="none">
            <text
              x="0"
              y="24"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="22"
              fill="white"
            >
              ●Pelo
            </text>
            <text
              x="60"
              y="24"
              fontFamily="Manrope, Arial"
              fontWeight="bold"
              fontSize="22"
              fill="white"
            >
              studio
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
