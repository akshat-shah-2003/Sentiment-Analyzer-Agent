chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'analyzeSentiment') {
    const selectedText = message.text;
    console.log('Selected Text:', selectedText);

    // Ensure selectedText is properly passed to the API
    fetch('http://localhost:8000/sentiment/?text=' + encodeURIComponent(selectedText))
      .then(response => response.json())
      .then(data => {
        if (data.sentiment) {
          // Send sentiment back to the active tab
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'displaySentiment', sentiment: data.sentiment });
          });
        } else {
          console.error("Sentiment not found in response:", data);
        }
      })
      .catch(err => {
        console.error('Error with sentiment analysis:', err);
      });
  }
});
