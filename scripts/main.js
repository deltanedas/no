Events.on(ClientLoadEvent, () => {
	Vars.ui.mods.shown(() => {
		const me = Vars.ui.mods.cont.cells.get(2).get().widget.cells.find(cell => {
			const btn = cell.get();
			if (!(btn instanceof Button)) return false;
			return btn.cells.get(0).get().cells.get(1).get().cells.get(0).get().text.toString().startsWith("no\n");
		}).get().cells.get(1).get();
		me.clear()
		me.add("[red]no");
	});
});
