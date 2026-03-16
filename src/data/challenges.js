export const challenges = [
  {
    "id": "1",
    "title": "The Last Words of the Anonymous Hacker",
    "difficulty": "Easy",
    "points": 100,
    "category": "Reverse Engineering",
    "file": "1_program_anonymous_hacker",
    "downloadUrl": "https://drive.google.com/file/d/1EOQl7w7DLnrl-S78WBZ4YzHEtek7SGhq/view?usp=sharing",
    "description": "A mysterious executable has surfaced on underground forums. It claims to contain the final message left behind by a legendary anonymous hacker — but the message is locked behind an activation code.",
    "writeup": "## 🎯 Objective\n\nYour task is to:\n\n- Analyze the provided binary\n- Discover the correct activation code\n- Unlock the hidden message\n\nSubmit the activation code in the format:\n\n```markdown\nNAME{...}\n```\n\n---\n\n## ⚠️ Notes\n\n- The binary does not contain the password in plaintext.\n- Strings extraction alone will not help.\n- Brute force is not recommended.\n- Reading between the lines is.\n\n---\n\n## 🏁 Flag Format\n\n```markdown\nDAKSHH{...}\n```\n\n---\n\nThe legendary hacker left one final safeguard in place.  \nCan you uncover what others have overlooked?\n\n**Good luck.**",
    "downloads": 8,
    "tags": ["Binary", "Executable", "Strings"]
  },
  {
    "id": "2",
    "title": "Are You Better Than Assembly?",
    "difficulty": "Hard",
    "points": 500,
    "category": "Reverse Engineering",
    "file": "2_task_better_than_assembly.out",
    "downloadUrl": "https://drive.google.com/file/d/1WNjuxjsA7r1ApqXD9RsNtic3oEq8GBGb/view?usp=sharing",
    "description": "You’ve been given a mysterious file. No source code. No binary. Just something that claims to be 'Better Than Assembly.' Somewhere inside this strange low-level construct lies the real flag. But beware — not everything it prints is the truth.",
    "writeup": "## 📜 Description\n\nYou’ve been given a mysterious file.\n\nNo source code.  \nNo binary.  \nJust something that claims to be **“Better Than Assembly.”**\n\nIt greets you with confidence:\n\n> *Only the chosen one will know what the flag is!*\n\nAre you the chosen one?\n\nSomewhere inside this strange low-level construct lies the real flag. But beware — not everything it prints is the truth. There may be decoys. There may be traps. There may be… fake victories.\n\n---\n\n## 🎯 Your Mission\n\n- Understand what this file really is.  \n- Figure out how it validates input.  \n- Defeat its logic.  \n- Recover the **real** flag.  \n\nNo brute force will save you.  \nNo guesswork will carry you through.  \nOnly careful analysis and a sharp understanding of bitwise logic will lead you to success.\n\nThink deeper than assembly.  \nThink structurally.  \nThink like the compiler.\n\n---\n\n## 🏁 Flag Format\n\n```markdown\nDAKSHH{...}\n```\n\n---\n\n**Good luck. The machine already doubts you.**",
    "downloads": 2,
    "tags": ["Assembly", "Logic", "Low Level"]
  },
  {
    "id": "3",
    "title": "OPERATION: SILENT BUS",
    "difficulty": "Hard",
    "points": 800,
    "category": "Reverse Engineering",
    "file": "3_can_dump_operation_silent_bus.log",
    "downloadUrl": "https://drive.google.com/file/d/1zI9TNcJZ3ULHlBC-aaTMi5gOU5zSS7Ts/view?usp=sharing",
    "description": "An intercepted telemetry archive from a classified automotive test facility containing raw Controller Area Network (CAN) traffic. Someone used a legitimate ECU update procedure to smuggle information.",
    "writeup": "## Mission Briefing\n\n**Directorate of Technical Intelligence**  \n**Internal Transmission — Authorized Personnel Only**\n\nAn intercepted telemetry archive from a classified automotive test facility has been forwarded to our division for analysis.\n\nThe capture contains **raw Controller Area Network (CAN) traffic** recorded during what appears to be a **firmware programming session for a vehicle Electronic Control Unit (ECU)**.\n\nInitial signals analysis indicates that the session follows a **standard automotive diagnostic workflow**, likely used during factory-level flashing or maintenance procedures.\n\nHowever, analysts discovered irregularities within the transmission sequence.\n\nSpecifically:\n\n- The diagnostic session appears **longer than expected**\n- The firmware transfer sequence contains **non-standard payload characteristics**\n- A pattern embedded within the update traffic suggests **deliberate data concealment**\n\nOur working hypothesis is that someone used a legitimate ECU update procedure to **smuggle information inside the firmware being transmitted over the CAN bus**.\n\nYour assignment is to recover that hidden message.\n\n---\n\n## Intelligence Package\n\nThe following artifact has been cleared for analysis:\n\n```\ncan_dump.log\n```\n\nThis file contains the **captured CAN bus frames** from the diagnostic session.\n\nNo additional context or tooling is provided.\n\nEverything required to complete the mission exists within this dataset.\n\n---\n\n## Operational Objectives\n\nYou must:\n\n1. Examine the CAN traffic\n2. Identify the communication protocol used during the diagnostic session\n3. Reconstruct the data transferred during the firmware programming process\n4. Extract the concealed message hidden within the transferred data\n\nSuccessful extraction will reveal the **flag**.\n\n---\n\n## Flag Format\n\n```\nDAKSHH{...}\n```\n\n---\n\n## Technical Context\n\nModern vehicles rely on multiple Electronic Control Units communicating over the **Controller Area Network (CAN)**.\n\nTo update ECU firmware, manufacturers typically use **diagnostic protocols layered over CAN**, enabling engineers to:\n\n- Initiate programming sessions  \n- Unlock security access  \n- Erase ECU memory  \n- Transfer firmware blocks  \n- Finalize installation  \n\nBecause CAN frames are limited in size, **large data transfers are segmented across multiple frames** using specialized transport protocols.\n\nUnderstanding this communication pattern will be essential for reconstructing the transmitted data.\n\n---\n\n## Analyst Notes\n\nDuring preliminary inspection of the capture, investigators observed:\n\n- Structured multi-frame message patterns  \n- Repeating block transmissions  \n- Indicators of a firmware download routine  \n\nThese patterns strongly suggest the presence of a **structured firmware transfer sequence** embedded in the CAN traffic.\n\nHidden somewhere inside that transfer lies the information we need.\n\n---\n\n## Your Role\n\nYou are part of the **Advanced Systems Analysis Unit**.\n\nTreat the capture as if it were collected during a real-world interception operation.\n\nNo assumptions.  \nNo shortcuts.\n\nBreak down the communication, reconstruct the transferred data, and uncover what was hidden inside.\n\n---\n\n**The signal is buried in the noise.**\n\nFind it.",
    "downloads": 3,
    "tags": ["CAN Bus", "Firmware", "Protocol Analysis"]
  }
];
