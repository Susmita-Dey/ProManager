import React from 'react';
import html2canvas from 'html2canvas';

const SnapshotButton = () => {
    const handleSnapshot = () => {
        // Take snapshot of the page
        html2canvas(document.body).then(canvas => {
            // Create a new window to display the snapshot
            const newWindow = window.open();
            newWindow.document.write('<html><body></body></html>');
            newWindow.document.body.appendChild(canvas);

            // Add buttons for sharing, copying, and downloading
            const buttonsContainer = newWindow.document.createElement('div');
            buttonsContainer.style.marginTop = '16px';

            // Share on Twitter button
            const shareButton = newWindow.document.createElement('a');
            shareButton.href = 'https://twitter.com/intent/tweet';
            shareButton.target = '_blank';
            shareButton.rel = 'noopener noreferrer';
            shareButton.innerHTML = 'Share on Twitter';
            buttonsContainer.appendChild(shareButton);

            // Copy to clipboard button
            const copyButton = newWindow.document.createElement('button');
            copyButton.innerHTML = 'Copy to Clipboard';
            copyButton.addEventListener('click', () => {
                canvas.toBlob(blob => {
                    const item = new ClipboardItem({ 'image/png': blob });
                    navigator.clipboard.write([item]);
                    alert('Image copied to clipboard!');
                });
            });
            buttonsContainer.appendChild(copyButton);

            // Download image button
            const downloadButton = newWindow.document.createElement('a');
            downloadButton.href = canvas.toDataURL();
            downloadButton.download = 'snapshot.png';
            downloadButton.innerHTML = 'Download Image';
            buttonsContainer.appendChild(downloadButton);

            newWindow.document.body.appendChild(buttonsContainer);
        });
    };

    return (
        <button className='px-4 py-2 bg-purple-600' onClick={handleSnapshot}>
            Take Snapshot 📸
        </button>
    );
};

export default SnapshotButton;
