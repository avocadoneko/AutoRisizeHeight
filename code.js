function resizeFrameHeight(frame) {
  let maxY = 0;

  frame.children.forEach((child) => {
    maxY = Math.max(maxY, child.y + child.height);
  });

  const newHeight = maxY;
  frame.resizeWithoutConstraints(frame.width, newHeight);
}

function main() {
  const nodes = figma.currentPage.selection;

  if (nodes.length === 0) {
    figma.notify('No frame selected');
    return;
  }

  nodes.forEach((node) => {
    if (node.type === 'FRAME') {
      resizeFrameHeight(node);
    } else {
      figma.notify('Selected item is not a frame');
    }
  });
}

main();
figma.closePlugin();
