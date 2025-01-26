// // Listen for text selection
// document.addEventListener('mouseup', () => {
//     const selectedText = window.getSelection().toString().trim();
//     console.log('Selected Text:', selectedText);  // Log the selected text
  
//     if (selectedText) {
//       chrome.runtime.sendMessage({ action: 'analyzeSentiment', text: selectedText });
//     }
//   });
  

// // Listen for sentiment from the background script
// chrome.runtime.onMessage.addListener((message) => {
//   if (message.action === 'displaySentiment') {
//     const sentiment = message.sentiment;
//     alert(`Feedback is ${sentiment}`);
//   }
// });
// Variable to store the range of the selected text
// Listen for text selection
document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString().trim();
  
    if (selectedText) {
      // Send the selected text to the background script for sentiment analysis
      chrome.runtime.sendMessage({ action: 'analyzeSentiment', text: selectedText });
    }
  });
  
  // Listen for sentiment from the background script
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'displaySentiment') {
      const sentiment = message.sentiment;
      
      // Get the bounding box of the selection
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      // Create a new div to display the sentiment
      const sentimentDiv = document.createElement('div');
      if (sentiment == "NEGATIVE") sentimentDiv.textContent = `Feedback: ${sentiment} \u{1F61E}`;
      else sentimentDiv.textContent = `Feedback: ${sentiment} \u{1F60A}`;
      sentimentDiv.style.position = 'absolute';
      sentimentDiv.style.top = `${rect.top + window.scrollY + rect.height + 10}px`; // Position it below the selection
      sentimentDiv.style.left = `${rect.left + window.scrollX}px`;
      if (sentiment == "NEGATIVE") {
        sentimentDiv.style.backgroundColor = 'rgba(200, 0, 0, 1)';
      }
      else {
        sentimentDiv.style.backgroundColor = 'rgba(0, 200, 0, 1)';
      }
      sentimentDiv.style.color = 'white';
      sentimentDiv.style.padding = '5px 10px';
      sentimentDiv.style.borderRadius = '5px';
      sentimentDiv.style.fontSize = '12px';
      sentimentDiv.style.zIndex = '9999';
  
      // Append the sentiment div to the body
      document.body.appendChild(sentimentDiv);
  
      // Remove the sentiment div after 3 seconds
      setTimeout(() => {
        sentimentDiv.remove();
      }, 3000);
    }
  });
  