function resizeNodeHeight(node) {
  let maxY = 0;

  node.children.forEach((child) => {
    maxY = Math.max(maxY, child.y + child.height);
  });

  const newHeight = maxY;
  node.resizeWithoutConstraints(node.width, newHeight);
}

function main() {
  const nodes = figma.currentPage.selection;

  if (nodes.length === 0) {
    figma.notify('No frame or component or instance selected');
    return;
  }

  nodes.forEach((node) => {
    if (node.type === 'FRAME' || node.type === 'COMPONENT' || node.type === 'INSTANCE') {
      resizeNodeHeight(node);
    } else {
      figma.notify('Selected item is not or component or instance');
    }
  });
}

main();
figma.closePlugin();
