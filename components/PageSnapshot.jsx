import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { MdClose } from 'react-icons/md';

const SnapshotModal = ({ imageUrl, closeModal }) => {
    // Add buttons for sharing, copying, and downloading
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.margin = '16px';

    const handleShareTwitter = () => {
        // Logic to share the image on Twitter
        // Share on Twitter
        const tweetText = 'Check out this snapshot of the page!';
        const tweetUrl = 'https://example.com'; // Replace with the URL of your page
        const tweetHashtags = ['productivity', 'ProManager'];

        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            tweetUrl
        )}&text=${encodeURIComponent(tweetText)}&hashtags=${encodeURIComponent(
            tweetHashtags.join(',')
        )}&amp;image=${encodeURIComponent(imageUrl)}`;


        const shareButton = document.createElement('a');
        shareButton.href = { twitterShareUrl };
        shareButton.target = '_blank';
        shareButton.rel = 'noopener noreferrer';
        shareButton.innerHTML = 'Share on Twitter';
        buttonsContainer.appendChild(shareButton);
        window.open(twitterShareUrl, '_blank');
    };

    const handleCopyClipboard = () => {
        // Logic to copy the image URL to the clipboard
        const copyButton = document.createElement('button');
        copyButton.innerHTML = 'Copy to Clipboard';
        copyButton.addEventListener('click', () => {
            canvas.toBlob(blob => {
                const item = new ClipboardItem({ 'image/png': blob });
                navigator.clipboard.write([item]);
                alert('Image copied to clipboard!');
            });
        });
        buttonsContainer.appendChild(copyButton);
    };

    const handleDownloadImage = () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'snapshot.png';
        link.click();
    };

    return (
        <div className="container flex justify-center items-center">
            <div className="relative bg-white rounded-lg p-4">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                >
                    <MdClose className='text-xl font-bold' />
                </button>
                <img src={imageUrl} alt="Snapshot" className="max-w-full max-h-full" />
                <div className="mt-4 flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                        onClick={handleShareTwitter}
                    >
                        Share on Twitter
                    </button>
                    <button
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
                        onClick={handleCopyClipboard}
                    >
                        Copy to Clipboard
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        onClick={handleDownloadImage}
                    >
                        Download Image
                    </button>
                </div>
            </div>
        </div>
    );
};

const PageSnapshot = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [snapshotUrl, setSnapshotUrl] = useState('');
    const pageRef = useRef(null);
    // alert(pageRef.current)

    const takeSnapshot = () => {
        html2canvas(pageRef.current, { useCORS: true, scrollY: 100 }).then((canvas) => {
            const url = canvas.toDataURL('image/png');
            alert(url)
            setSnapshotUrl(url);
            setModalOpen(true);
        });
    };

    const closeModal = () => {
        setModalOpen(false);
        setSnapshotUrl('');
    };

    return (
        <div>
            <button onClick={takeSnapshot}>Take Snapshot</button>
            <div ref={pageRef}>
                {/* Your page content goes here */}
                {modalOpen && (
                    <SnapshotModal imageUrl={snapshotUrl} closeModal={closeModal} />
                )}
            </div>
        </div>
    );
};

export default PageSnapshot;
