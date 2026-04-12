<div className="flex flex-wrap justify-center gap-4">
  <Button
    asChild
    className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white hover:bg-hive-orange/90"
  >
    <Link href="/contact">{copy.awareness.requestTraining}</Link>
  </Button>

  <Button
    asChild
    className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white hover:bg-hive-orange/90"
  >
    <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
      {copy.awareness.bookCall}
    </Link>
  </Button>

  <Button
    asChild
    variant="outline"
    className="h-auto rounded-full border-hive-orange px-8 py-4 text-base font-bold text-hive-orange hover:bg-hive-orange/5"
  >
    <Link href="/training-catalog.pdf" target="_blank" rel="noopener noreferrer">
      {copy.awareness.downloadCatalog}
    </Link>
  </Button>

  <Button
    asChild
    className="h-auto rounded-full bg-hive-orange px-8 py-4 text-base font-bold text-white hover:bg-hive-orange/90"
  >
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=kinnethia@thehivecc.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      {copy.awareness.contactTeam}
    </a>
  </Button>
</div>