---

# **AJAZZ-APEX-TimeSync**

A script for automatically synchronizing time on the docking station for AJAZZ Apex series mice. The `main.js` file is directly taken from the [qmk.top](https://qmk.top/) website, which is used to configure the mouse. This script works only on Windows.

### **Requirements:**

1. **Node.js**  
   The script requires Node.js to run. You can download it from the [official Node.js website](https://nodejs.org/).

2. **Puppeteer**  
   Puppeteer is a Node.js library used for browser automation.

3. **Operating System**  
   This script is designed to work only on **Windows**.

### **Installation:**

1. Clone or download the repository:

   ```bash
   git clone https://github.com/failman34/AJAZZ-APEX-TimeSync.git
   ```

2. Navigate to the project directory:

   ```bash
   cd AJAZZ-APEX-TimeSync
   ```

3. Install all the dependencies. Run the command in the directory with the project files:

   ```bash
   npm install puppeteer
   ```


### **Usage:**

1. To run the script, execute start.bat or start.vsl




2. To ensure the script runs automatically at startup without opening console windows, add the start.vsl file to your Windows startup folder. This will automatically trigger the     script when the system boots, and it will run silently in the background without opening any console windows.

---